import React, { type ReactNode } from 'react';
import { useClearQueryString } from '@docusaurus/theme-common';

export default function ClearAllButton(): ReactNode {
    const clearQueryString = useClearQueryString();
    // TODO translate
    return (
        <button
            className="button button--outline button--primary"
            type="button"
            onClick={() => clearQueryString()}>
            Supprimer les filtres
        </button>
    );
}