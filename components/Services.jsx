import React from "react";

const Services = () => {

const services = [

{
id:1,
title:"Neurological Rehabilitation",
description:"Specialized physiotherapy for patients recovering from neurological conditions affecting movement and coordination.",
details:[
"Stroke rehabilitation",
"Balance and coordination training",
"Mobility improvement programs",
"Muscle strengthening therapy"
],
image:"https://images.unsplash.com/photo-1581594549595-35f6edc7b762",
alt:"Neurological physiotherapy rehabilitation",
color:"service-blue"
},

{
id:2,
title:"Respiratory & Chest Physiotherapy",
description:"Treatment focused on improving breathing and lung function for respiratory conditions.",
details:[
"Pneumonia recovery therapy",
"Breathing exercises",
"Airway clearance techniques",
"Lung capacity improvement"
],
image:"https://images.unsplash.com/photo-1579154204601-01588f351e67",
alt:"Respiratory physiotherapy treatment",
color:"service-green",
reverse:true
},

{
id:3,
title:"Spinal Cord Injury Rehabilitation",
description:"Rehabilitation programs designed to restore mobility, strength, and independence after spinal injuries.",
details:[
"Mobility restoration",
"Functional training",
"Strength and balance training",
"Gait training"
],
image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
alt:"Spinal injury rehabilitation therapy",
color:"service-purple"
},

{
id:4,
title:"Back & Neck Pain Therapy",
description:"Targeted physiotherapy to relieve chronic or acute pain in the spine, neck, and surrounding muscles.",
details:[
"Postural correction",
"Spinal mobility exercises",
"Muscle relaxation therapy",
"Pain management techniques"
],
image:"https://images.unsplash.com/photo-1584515933487-779824d29309",
alt:"Back pain physiotherapy treatment",
color:"service-orange",
reverse:true
},

{
id:5,
title:"Post-Operative Rehabilitation",
description:"Guided recovery programs following surgery to restore strength, mobility, and function.",
details:[
"Joint mobility restoration",
"Strength rebuilding",
"Scar tissue management",
"Functional movement therapy"
],
image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f",
alt:"Post operative physiotherapy",
color:"service-pink"
},

{
id:6,
title:"Orthopedic Rehabilitation",
description:"Treatment for joint injuries, bone conditions, and musculoskeletal disorders affecting mobility.",
details:[
"Fracture rehabilitation",
"Joint strengthening",
"Mobility training",
"Pain relief therapy"
],
image:"https://images.unsplash.com/photo-1576765608866-5b51046452be",
alt:"Orthopedic physiotherapy",
color:"service-blue"
},

{
id:7,
title:"Geriatric Physiotherapy",
description:"Specialized therapy designed to improve mobility, balance, and quality of life for elderly patients.",
details:[
"Fall prevention training",
"Balance improvement",
"Joint mobility therapy",
"Strength training"
],
image:"https://images.unsplash.com/photo-1580281657527-47b2b3d9d8c2",
alt:"Elderly physiotherapy care",
color:"service-green"
},

{
id:8,
title:"Sports Injury Rehabilitation",
description:"Treatment and recovery programs for athletes and active individuals recovering from sports injuries.",
details:[
"Muscle injury treatment",
"Performance recovery",
"Strength conditioning",
"Injury prevention programs"
],
image:"https://images.unsplash.com/photo-1599058917212-d750089bc07e",
alt:"Sports physiotherapy training",
color:"service-orange"
},

{
id:9,
title:"Arthritis Management Therapy",
description:"Physiotherapy techniques to reduce joint pain, stiffness, and improve mobility for arthritis patients.",
details:[
"Joint mobility exercises",
"Pain reduction therapy",
"Strength training",
"Movement rehabilitation"
],
image:"https://images.unsplash.com/photo-1580281780460-82d2770c929f",
alt:"Arthritis physiotherapy treatment",
color:"service-purple"
}

];

return (
<section id="services" className="services">

<div className="services-container">

<div className="services-header">
<h2>Our <span>Specialized Services</span></h2>

<p>
Comprehensive physiotherapy care tailored to your needs,
delivered by certified professionals.
</p>

</div>

<div className="services-grid">

{services.map((service) => (

<div
key={service.id}
className={`service-item ${service.reverse ? "reverse" : ""}`}
>

<div className="service-grid">

<div className="service-image-container">

<img
src={service.image}
alt={service.alt}
className="service-image"
loading="lazy"
/>

<div className={`service-number ${service.color}`}>
{service.id}
</div>

</div>

<div className="service-content">

<h3>{service.title}</h3>

<p>{service.description}</p>

<div className="service-details">

<h4>What we treat:</h4>

<ul>

{service.details.map((detail, idx) => (

<li key={idx}>
<span className="check-icon">✓</span>
{detail}
</li>

))}

</ul>

</div>

</div>

</div>

</div>

))}

</div>

<div className="services-cta-section">

<h3>Not sure which service you need?</h3>

<p>
Book a consultation and our specialists will assess your condition
and recommend the best treatment plan.
</p>

<button className="cta-button">
Book a Consultation Today
</button>

</div>

</div>

</section>
);

};

export default Services;