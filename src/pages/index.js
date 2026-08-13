import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">
            面向可复现科研的本地优先 AI 工作台
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            <Translate id="homepage.readDocs">阅读完整文档</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const guides = [
    {
      id: 'getting-started',
      title: translate({id: 'homepage.guides.gettingStarted.title', message: '开始使用'}),
      description: translate({
        id: 'homepage.guides.gettingStarted.description',
        message: '安装桌面应用，配置 Agent、模型、Notebook 与数据目录。',
      }),
      to: '/docs/getting-started/installation',
    },
    {
      id: 'workspace',
      title: translate({id: 'homepage.guides.workspace.title', message: '研究工作区'}),
      description: translate({
        id: 'homepage.guides.workspace.description',
        message: '逐项掌握对话、附件、文件预览、权限、Notebook 和 Provenance。',
      }),
      to: '/docs/workspace/conversation',
    },
    {
      id: 'settings',
      title: translate({id: 'homepage.guides.settings.title', message: '设置与参考'}),
      description: translate({
        id: 'homepage.guides.settings.description',
        message: '配置全部 13 个设置面板，并按控件索引快速查找操作。',
      }),
      to: '/docs/settings/overview',
    },
  ];

  return (
    <Layout
      title={translate({id: 'homepage.meta.title', message: 'Open Science 文档'})}
      description={translate({
        id: 'homepage.meta.description',
        message: 'AIPOCH Open Science 的完整操作、配置与科研复现指南',
      })}>
      <HomepageHeader />
      <main>
        <section className={styles.guideSection}>
          <div className="container">
            <div className="row">
              {guides.map((guide) => (
                <div className="col col--4" key={guide.id}>
                  <Link className={styles.guideCard} to={guide.to}>
                    <Heading as="h2">{guide.title}</Heading>
                    <p>{guide.description}</p>
                    <span>
                      <Translate id="homepage.openGuide">打开指南 →</Translate>
                    </span>
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
