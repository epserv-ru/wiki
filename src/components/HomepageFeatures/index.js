import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Для чего это нужно?',
    Svg: require('@site/static/img/home/helpful_docs.svg').default,
    description: (
      <>
        Пополнение знаний игроков о проекте и что на нём есть, как для новичков,
        так и для активных игроков. Полезно даже для тех, кто играет у нас более года!
      </>
    ),
  },
  {
    title: 'Какая информация здесь собрана?',
    Svg: require('@site/static/img/home/detailed_info.svg').default,
    description: (
      <>
        Здесь есть всё: начиная от описаний должностей и существующих донатов
        до туториалов по плагинам проекта и других особенностей игрового процесса.
      </>
    ),
  },
  {
    title: 'Простота в использовании',
    Svg: require('@site/static/img/home/easy_to_use.svg').default,
    description: (
      <>
        Текст в этой документации написан легко и понятно, что поможет без труда
        разобраться в аспектах игры на проекте.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
