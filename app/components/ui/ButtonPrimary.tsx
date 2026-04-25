"use client";
import React from "react";

interface ButtonPrimaryProps {
  text: string;
  href: string;
  className?: string;
  variant?: "lime" | "white" | "lime-black-hover";
}

export default function ButtonPrimary({ text, href, className = "", variant = "lime" }: ButtonPrimaryProps) {
  const baseColor = (variant === "lime" || variant === "lime-black-hover") ? "#D0F601" : "#fff";
  
  return (
    <>
      <a 
        href={href} 
        className={`btn-primary-wrap ${className}`}
      >
        {/* Arrow circle part */}
        <span className="btn-primary-arrow">
          <span className="btn-primary-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none">
              <path 
                d="M4.6665 4.6665L16.3332 16.3332M16.3332 16.3332V4.6665M16.3332 16.3332H4.6665"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </span>
        </span>

        {/* Text pill part */}
        <span className="btn-primary-text">
          {text}
        </span>
      </a>

      <style jsx>{`
        .btn-primary-wrap {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          letter-spacing: -0.01em;
          gap: 2px;
          cursor: pointer;
        }

        .btn-primary-arrow {
          width: 54px;
          height: 54px;
          background: ${baseColor};
          border-radius: 0 50% 50% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #0a0a0a;
          transition: 
            border-radius 0.25s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.35s cubic-bezier(0.72, -0.22, 0.13, 1.18),
            color 0.3s ease;
        }

        .btn-primary-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(0deg);
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .btn-primary-text {
          background: ${baseColor};
          padding: 0 2rem;
          height: 54px;
          display: flex;
          align-items: center;
          border-radius: 999px;
          white-space: nowrap;
          color: #0a0a0a;
          transition: background-color 0.35s cubic-bezier(0.72, -0.22, 0.13, 1.18), color 0.3s ease;
        }

        /* Hover states */
        .btn-primary-wrap:hover .btn-primary-arrow {
          border-radius: 50% 50% 50% 0;
          background: ${variant === "lime" ? "#fff" : variant === "lime-black-hover" ? "#111" : "#D0F601"};
          color: ${variant === "lime-black-hover" ? "#fff" : "#0a0a0a"};
        }
        
        .btn-primary-wrap:hover .btn-primary-text {
          background: ${variant === "lime" ? "#fff" : variant === "lime-black-hover" ? "#111" : "#D0F601"};
          color: ${variant === "lime-black-hover" ? "#fff" : "#0a0a0a"};
        }

        .btn-primary-wrap:hover .btn-primary-icon {
          transform: rotate(-135deg);
        }
      `}</style>
    </>
  );
}
