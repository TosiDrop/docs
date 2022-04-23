import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
  {
    title: 'About TosiDrop',
    link:  '/docs/about-tosidrop/Introduction',
    description: (
      <>
        Learn about TosiDrop, a seamless token distribution platform on Cardano and Ergo. Learn about our mission and key principles.
      </>
    ),
  },
  {
    title: 'User Guides',
    link:  '/docs/user-guides/how-does-it-work',
    description: (
      <>
        Learn how to claim tokens on TosiDrop or how to distribute your token on our platform.
      </>
    ),
  },
  {
    title: 'Protocol overview',
    link: '/docs/protocol-overview/introduction',
    description: (
      <>
        Learn about the architecture of the TosiDrop platform.
      </>
    ),
  },
];

function Guide({title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageGuides() {
  return (
    <section id = "guide-cards" style = {{marginTop: 25}} className={styles.guides}>
        {Guides.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
