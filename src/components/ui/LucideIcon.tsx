"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface LucideIconProps extends LucideProps {
    name: keyof typeof LucideIcons;
    className?: string;
    size?: number | string;
    color?: string;
}

const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
    const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>;

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <IconComponent {...props} />;
};

export default LucideIcon;
