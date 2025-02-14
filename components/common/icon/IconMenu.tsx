export default function IconMenu({className}:any) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 24 24" stroke="currentColor" focusable="false"
        >
            <g transform="translate(12,12)">
                <path d="M-9 -5 L9 -5" fill="none" stroke-width="2"></path>
                <path d="M-9 0 L9 0" fill="none" stroke-width="2"></path>
                <path d="M-9 5 L9 5" fill="none" stroke-width="2"></path>
            </g>
        </svg>
    );
  }
  