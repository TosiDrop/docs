import React from 'react';
import Layout from '@theme/Layout';
import styles from './LandingDocsOptions.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
    {
        title: 'About TosiDrop',
        link: 'docs/about-tosidrop',
        description: (
            <>
                Learn about TosiDrop, a seamless token distribution platform on Cardano and Ergo. Learn about our mission and key principles.
            </>
        ),
    },{
        title: 'User Guides',
        link: 'docs/user-guides',
        description: (
            <>
		Learn how to claim tokens on TosiDrop or how to distribute your token on our platform. 

            </>
        )
    },
    {
        title: 'Protocol Overview',
        link: 'docs/protocol-overview',
        description: (
            <>
            Learn about the architecture of the TosiDrop platform.
            </>
        )
    }
];

function DocumentationLanding({Svg, title, description, link}) {
    return (
        <Link isNavLink={true} to={link} className="'col col--4', styles.guide">
            <div className="'text--center', 'padding-horiz--md', styles.wrapper">
                <ExternalArrow className="exportArrow"/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default function LandingGuides() {
    return (
        <section className="guideCards">
            {Guides.map((props, idx) => (
                <DocumentationLanding key={idx} {...props} />
            ))}
        </section>
    )
}
