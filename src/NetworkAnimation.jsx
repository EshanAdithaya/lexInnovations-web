import React, { useEffect, useRef } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Network node properties
    const nodes = [];
    const nodeCount = 30; // Number of connection points
    const nodeRadius = 2;
    const primaryColor = '#3B82F6'; // Blue primary color
    const secondaryColor = '#60A5FA'; // Lighter blue for variation
    
    // Create nodes with random positions
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7, // Random velocity x
        vy: (Math.random() - 0.5) * 0.7, // Random velocity y
        radius: Math.random() * 1.5 + nodeRadius,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        connections: [] // Will store connections to other nodes
      });
    }
    
    // Add several fixed larger nodes to serve as network hubs
    const hubCount = 3;
    for (let i = 0; i < hubCount; i++) {
      nodes.push({
        x: canvas.width * (0.3 + 0.4 * (i / (hubCount - 1))),
        y: canvas.height * (0.3 + 0.4 * Math.sin(i * Math.PI / hubCount)),
        vx: (Math.random() - 0.5) * 0.2, // Slower movement for hubs
        vy: (Math.random() - 0.5) * 0.2,
        radius: 4 + Math.random() * 2, // Larger radius for hubs
        color: '#1D4ED8', // Darker blue for hubs
        pulseSpeed: 0.01 + Math.random() * 0.01,
        isHub: true,
        connections: []
      });
    }
    
    // Data packets that travel along connections
    const dataPackets = [];
    
    // Create new data packet
    const createDataPacket = () => {
      // Select a random hub as source
      const hubNodes = nodes.filter(node => node.isHub);
      const sourceHub = hubNodes[Math.floor(Math.random() * hubNodes.length)];
      
      // Select a random node (not the source) as destination
      let destinationNode;
      do {
        destinationNode = nodes[Math.floor(Math.random() * nodes.length)];
      } while (destinationNode === sourceHub);
      
      // Create a path between nodes (could be implemented with A* or other pathfinding)
      // For simplicity, we'll use a direct path
      dataPackets.push({
        sourceNode: sourceHub,
        targetNode: destinationNode,
        position: { x: sourceHub.x, y: sourceHub.y },
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
        color: Math.random() > 0.5 ? '#60A5FA' : '#93C5FD',
        size: 1.5 + Math.random() * 1.5
      });
    };
    
    // Create initial data packets
    for (let i = 0; i < 5; i++) {
      createDataPacket();
    }
    
    // Calculate connection strength between nodes based on proximity
    const calculateConnections = () => {
      const connectionDistance = canvas.width * 0.25; // Maximum distance for connection
      
      // Reset connections
      nodes.forEach(node => {
        node.connections = [];
      });
      
      // Calculate new connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Calculate connection strength based on distance
            const strength = 1 - (distance / connectionDistance);
            
            // Store connection information
            nodeA.connections.push({ node: nodeB, strength });
            nodeB.connections.push({ node: nodeA, strength });
          }
        }
      }
    };
    
    // Animation timer
    let animationTime = 0;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationTime += 0.01;
      
      // Update node positions
      nodes.forEach(node => {
        // Move node
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges with some padding
        const padding = 20;
        if (node.x < padding || node.x > canvas.width - padding) node.vx *= -1;
        if (node.y < padding || node.y > canvas.height - padding) node.vy *= -1;
        
        // Keep nodes within canvas
        node.x = Math.max(padding, Math.min(canvas.width - padding, node.x));
        node.y = Math.max(padding, Math.min(canvas.height - padding, node.y));
        
        // Apply subtle circular motion to hubs
        if (node.isHub) {
          node.x += Math.sin(animationTime * 0.2) * 0.2;
          node.y += Math.cos(animationTime * 0.2) * 0.2;
        }
      });
      
      // Recalculate connections based on current positions
      calculateConnections();
      
      // Draw connections
      nodes.forEach(node => {
        node.connections.forEach(connection => {
          const targetNode = connection.node;
          
          // Draw connection line with gradient
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${connection.strength * 0.5})`;
          ctx.lineWidth = connection.strength * 1.5;
          ctx.stroke();
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(animationTime * node.pulseSpeed) * 0.5 + 0.5;
        const glowRadius = node.radius * (1 + pulse);
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.05 * pulse})`;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add highlight effect for hubs
        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * (1 + pulse * 0.3), 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      
      // Update data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i];
        packet.progress += packet.speed;
        
        // Calculate current position along the path
        const sourceX = packet.sourceNode.x;
        const sourceY = packet.sourceNode.y;
        const targetX = packet.targetNode.x;
        const targetY = packet.targetNode.y;
        
        packet.position.x = sourceX + (targetX - sourceX) * packet.progress;
        packet.position.y = sourceY + (targetY - sourceY) * packet.progress;
        
        // Draw data packet
        ctx.beginPath();
        ctx.arc(packet.position.x, packet.position.y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.fill();
        
        // Draw packet trail
        ctx.beginPath();
        ctx.moveTo(packet.position.x, packet.position.y);
        
        // Trail length based on progress and direction
        const trailLength = 0.1;
        const trailX = packet.position.x - (targetX - sourceX) * trailLength * packet.speed * 20;
        const trailY = packet.position.y - (targetY - sourceY) * trailLength * packet.speed * 20;
        
        ctx.lineTo(trailX, trailY);
        ctx.strokeStyle = `rgba(96, 165, 250, 0.5)`;
        ctx.lineWidth = packet.size;
        ctx.stroke();
        
        // Remove completed packets and create new ones
        if (packet.progress >= 1) {
          dataPackets.splice(i, 1);
          
          // Create a new packet to replace the completed one
          if (Math.random() < 0.8) { // 80% chance to create a new packet immediately
            createDataPacket();
          }
        }
      }
      
      // Randomly create new packets
      if (dataPackets.length < 10 && Math.random() < 0.02) {
        createDataPacket();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative h-full w-full">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
    </div>
  );
};

export default NetworkAnimation;