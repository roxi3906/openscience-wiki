import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const guides = [
  {
    title: '开始使用',
    description: '安装桌面应用，配置 Agent、模型、Notebook 与数据目录。',
    to: '/docs/getting-started/installation',
  },
  {
    title: '研究工作区',
    description: '逐项掌握对话、附件、文件预览、权限、Notebook 和 Provenance。',
    to: '/docs/workspace/conversation',
  },
  {
    title: '设置与参考',
    description: '配置全部 13 个设置面板，并按控件索引快速查找操作。',
    to: '/docs/settings/overview',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            阅读完整文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Open Science 文档"
      description="AIPOCH Open Science 的完整操作、配置与科研复现指南">
      <HomepageHeader />
      <main>
        <section className={styles.guideSection}>
          <div className="container">
            <div className="row">
              {guides.map((guide) => (
                <div className="col col--4" key={guide.title}>
                  <Link className={styles.guideCard} to={guide.to}>
                    <Heading as="h2">{guide.title}</Heading>
                    <p>{guide.description}</p>
                    <span>打开指南 →</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
