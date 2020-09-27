// FirstSVG.jsx
console.log( "Mounting FirstSVG.jsx... <FirstSVG />" );

import React from 'react'
import '../svg/svg.sass';

const FirstSVG = (props) => {
    
    return (
        <div className={"grid"}>
        <article className="tile is-child notification is-warning">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
            <svg viewBox="0 0 500 500" width="60%" height="40%" {...props} className={"tile is-parent"}>
                <h1 className='title is-2'>{props.name}</h1>
                {/*
                 <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="2 18"
                  strokeWidth={40}
                  d="M10 30h142"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="20 20"
                  strokeOpacity={0.5}
                  strokeWidth={20}
                  d="M10 70h140"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeLinecap="round"
                  strokeWidth={40}
                  d="M30 110h40"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="0 20"
                  strokeLinecap="round"
                  strokeWidth={10}
                  d="M110 110h40"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeLinecap="round"
                  strokeOpacity={0.5}
                  strokeWidth={40}
                  d="M130 160h0"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="1 1 1 1 1 2 2 2 2 1 1 1 4 1 1 2 2 2 1 1 1 1 1 1 1 1 2 3 1 1 2 1 3 1 1 3 1 2 1 2 1 1"
                  strokeWidth={40}
                  d="M10 160h90"
                />
                <text fontSize={14} textAnchor="middle" x={75} y={200}>
                  {'A single segment'}
                </text>
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="2 18"
                  strokeWidth={42}
                  d="M180 31h142"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="2 18"
                  strokeWidth={142}
                  d="M251 10v42"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeDasharray="20 20"
                  strokeOpacity={0.5}
                  strokeWidth={20}
                  d="M180 70h140"
                />
                <path
                  fill="none"
                  stroke="silver"
                  strokeDasharray="20 20"
                  strokeDashoffset={20}
                  strokeOpacity={0.5}
                  strokeWidth={20}
                  d="M180 70h140"
                />
                <path
                  fill="none"
                  stroke="#2f4f4f"
                  strokeLinecap="round"
                  strokeOpacity={0.7}
                  strokeWidth={40}
                  d="M230 130h40M250 110v40"
                />
                <text fontSize={14} textAnchor="middle" x={250} y={200}>
                  {'Two segments'}
                </text>
                */}                
                 <circle 
                  cx={40}
                  cy={40}
                  r={20}
                  stroke={"#2f4f4f"}
                  strokeWidth={20}
                  strokeOpacity={0.5}
                  fill={"#789"}
                  fillOpacity={0.5}
                />
                
                <circle
                  cx={120}
                  cy={40}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={10}
                  strokeDasharray="1.75 8.72"
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={40}
                  cy={100}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="15.708 15.708"
                  strokeDashoffset={7.854}
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={120}
                  cy={100}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="47.124 15.708"
                  strokeDashoffset={7.854}
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={40}
                  cy={160}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={2}
                  strokeDasharray="31.416 31.416"
                  strokeDashoffset={-15.708}
                  fill="none"
                />
                <circle
                  cx={120}
                  cy={160}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={8}
                  strokeDasharray="62.832 100"
                  strokeDashoffset={-41.888}
                  fill="none"
                  strokeLinecap="round"
                />
                <text x={75} y={200} fontSize={14} textAnchor="middle">
                  {'single circle each'}
                </text>

                <circle
                  cx={230}
                  cy={40}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeOpacity={0.5}
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={230}
                  cy={40}
                  r={15}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeOpacity={0.5}
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={310}
                  cy={40}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={10}
                  strokeDasharray="1.75 8.72"
                  fill="#789"
                  fillOpacity={0.5}
                />
                <circle
                  cx={310}
                  cy={40}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="0.875 14.833 0.875 100"
                  fill="none"
                />
                <circle
                  cx={230}
                  cy={100}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={2}
                  fill="none"
                />
                <circle
                  cx={230}
                  cy={100}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="0.524 2.094"
                  fill="none"
                />
                <circle
                  cx={310}
                  cy={100}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="15.708 15.708"
                  strokeDashoffset={7.854}
                  fill="none"
                />
                <circle
                  cx={310}
                  cy={100}
                  r={10}
                  stroke="#789"
                  strokeWidth={20}
                  strokeDasharray="15.708 15.708"
                  strokeDashoffset={-7.854}
                  fill="none"
                />
                <circle
                  cx={230}
                  cy={160}
                  r={10}
                  stroke="#2f4f4f"
                  strokeWidth={20}
                  strokeDasharray="15.708 15.708"
                  strokeDashoffset={7.854}
                  strokeOpacity={0.5}
                  fill="#789"
                />
                <circle
                  cx={230}
                  cy={160}
                  r={10}
                  stroke="#789"
                  strokeWidth={20}
                  strokeDasharray="15.708 15.708"
                  strokeDashoffset={-7.854}
                  strokeOpacity={0.5}
                  fill="none"
                />
                <circle
                  cx={310}
                  cy={160}
                  r={20}
                  stroke="#2f4f4f"
                  strokeWidth={8}
                  strokeDasharray="6.981 13.962"
                  strokeDashoffset={3.491}
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx={310}
                  cy={160}
                  r={10}
                  stroke="#789"
                  strokeWidth={20}
                  strokeDasharray="3.491 6.981"
                  strokeDashoffset={-3.491}
                  fill="none"
                />
                
                <text x={275} y={200} fontSize={14} textAnchor="middle">
                  {'two concentric circles each'}
                </text>
                {/*
                <path
                  stroke="#2f4f4f"
                  strokeWidth={15}
                  strokeOpacity={0.5}
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinejoin="round"
                  d="M20 50h40L40 15.36z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={5}
                  strokeDasharray="20 20"
                  strokeDashoffset={10}
                  fill="#789"
                  strokeLinejoin="round"
                  d="M100 50h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={15}
                  strokeDasharray="20 20"
                  strokeDashoffset={10}
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M20 110h40L40 75.36z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={12}
                  strokeDasharray="20 20"
                  strokeDashoffset={-10}
                  fill="none"
                  strokeLinecap="round"
                  d="M100 110h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={23}
                  strokeOpacity={0.5}
                  strokeDasharray="20 20"
                  strokeDashoffset={-10}
                  fill="none"
                  strokeLinecap="round"
                  d="M20 170h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={15}
                  strokeDasharray="40 40 1 40"
                  fill="#789"
                  strokeLinecap="round"
                  d="M100 170h40l-20-34.64z"
                />
                <text x={75} y={200} fontSize={14} textAnchor="middle">
                  {'single triangle each'}
                </text>
                <path
                  stroke="#2f4f4f"
                  strokeWidth={10}
                  strokeOpacity={0.5}
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinejoin="round"
                  d="M220 50h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={10}
                  strokeOpacity={0.5}
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinejoin="round"
                  d="M220 26.9h40l-20 34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={5}
                  strokeDasharray="20 20"
                  strokeDashoffset={10}
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M220 110h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={5}
                  strokeDasharray="20 20"
                  strokeDashoffset={10}
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M220 86.9h40l-20 34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={5}
                  strokeDasharray="0.1 17 6 17"
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M220 170h40l-20-34.64z"
                />
                <path
                  stroke="#2f4f4f"
                  strokeWidth={5}
                  strokeDasharray="0.1 17 6 17"
                  fill="#789"
                  fillOpacity={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M220 146.9h40l-20 34.64z"
                />
                <text x={240} y={200} fontSize={14} textAnchor="middle">
                  {'two triangles each'}
                </text>   
                */}
                             
            </svg>
            </div>
            </article>
        </div>
    )
}
export default FirstSVG;

// eof 