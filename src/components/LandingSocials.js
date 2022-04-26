import React from 'react';
import clsx from 'clsx';
import styles from './LandingSocials.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from "../../static/img/external-arrow.svg";

const TwitterIcon = ({ style }) => {
    const Icon = require('../../static/img/twitter.svg').default;

    return (
        <div style={style} className={styles.twitter}>
            <Icon style={{ width: 66.67, height: 66.67 }}/>
        </div>
    )
}

const Socials = [
  {
    title: 'Twitter',
    link:  'https://twitter.com/tosidrop',
    Icon:  TwitterIcon,
    description: (
      <>
          Latest project status, partnerships, and notifications!
      </>
    ),
  },
  {
    title: 'Telegram',
    link: 'https://t.me/+FdDUmLsW8jI0YmUx',
    Icon:  require('../../static/img/telegram.svg').default,
    description: (
      <>
          Engage with TosiDrop community and get more information about our protocol.
      </>
    ),
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/C32Mm3j4fG',
    Icon:  require('../../static/img/discord.svg').default,
    description: (
      <>
        Discuss features, get support or contact devs.
      </>
    ),
  },
];

function Guide({Icon, title, description, link}) {
  return (
    <Link href={link} target="_blank" className={clsx('col col--4', styles.social)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <Icon style={{ width: 100, height: 100, margin: '0 auto' }} />
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageSocials() {
  return (
    <section className={styles.socials}>
        {Socials.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
