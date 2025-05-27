import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface OverlaySpinnerProps {
    variant?: string;
    animation?: 'border' | 'grow';
    size?: 'sm';
}

export const OverlaySpinner: React.FC<OverlaySpinnerProps> = ({ variant = 'primary', animation = 'border', size }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1050
            }}
        >
            <Spinner animation={animation} variant={variant} size={size} />
        </div>
    );
};
