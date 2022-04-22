import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LandingSocials from '../components/LandingSocials'
import Cards from '../pages/HomepageGuides';
import clsx from 'clsx';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to TosiDrop Docs</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome`}>
      <div className={styles.wrapper}>
      <HomepageHeader/>
      <main>
        <Cards/>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>Join our community!</h2>
        <LandingSocials/>
      </main>
      </div>
    </Layout>
  );
}
