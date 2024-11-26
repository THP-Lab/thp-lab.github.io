import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Une pédagogie révolutionnaire',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Inspirée par des études de scientifiques des universités de Berkeley, Harvard, et Yale, notre pédagogie est la plus adaptée pour former aux métiers modernes, et considérée comme l'une des meilleures au monde.
      </>
    ),
  },
  {
    title: 'Concentrez vous sur les choses importantes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Notre recette en une phrase ? Vous apprenez d'où vous voulez, en communauté, en faisant des projets concrets.
      </>
    ),
  },
  {
    title: 'Travaillez sur des projets innovants',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      THP-Lab cherche à promouvoir et aider au développement de projets Open-Source qui pourraient changer les choses. 
      Rejoignez ceux qui veulent laisser leur marque. 
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
