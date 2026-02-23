"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';

type LucideIconProps = {
    name: string;
    className?: string;
    size?: number | string;
    color?: string;
    [key: string]: unknown;
};

const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<Record<string, unknown>>>;
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <IconComponent {...props} />;
};

export default LucideIcon;
