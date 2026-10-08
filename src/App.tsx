import './App.css'
import { useEffect, useState } from 'react'

import {
  FaCubes,
  FaServer,
  FaChartLine,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaTools,
  FaDesktop,
  FaGraduationCap,
  FaCertificate,
  FaGlobeAsia,
  FaShoppingCart,
  FaFileSignature,
  FaIndustry,
  FaUserCog,
  FaFileInvoiceDollar,
} from 'react-icons/fa'


const techGroups = [
  {
    title: 'Core',
    items: ['Java', 'Spring Boot', 'MySQL / Oracle'],
  },
  {
    title: 'Integration',
    items: ['Batch', 'API Integration', 'Data Sync'],
  },
  {
    title: 'Infrastructure',
    items: ['Linux', 'Nginx', 'AWS Lightsail'],
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.15,
    }
  )

  const targets = document.querySelectorAll('.reveal')

  targets.forEach((target) => observer.observe(target))

  return () => {
    targets.forEach((target) => observer.unobserve(target))
  }
}, [])
useEffect(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      threshold: 0.35,
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => {
    sections.forEach((section) => observer.unobserve(section))
  }
}, [])
  return (
    <div className="app">
    <header className="header">
  <div className="logo-wrap">
    <span className="logo-mark">JYH</span>
    <span className="logo-role">Backend Developer</span>
  </div>

  <nav className={`nav ${menuOpen ? 'open' : ''}`}>
    <a
      href="#home"
      className={activeSection === 'home' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Home
    </a>

    <a
      href="#about"
      className={activeSection === 'about' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      About
    </a>

    <a
      href="#skills"
      className={activeSection === 'skills' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Skills
    </a>

    <a
      href="#experience"
      className={activeSection === 'experience' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Experience
    </a>

    <a
      href="#projects"
      className={activeSection === 'projects' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </a>

    <a
      href="#troubleshooting"
      className={activeSection === 'troubleshooting' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Troubleshooting
    </a>

    <a
      href="#contact"
      className={activeSection === 'contact' ? 'active' : ''}
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>
  </nav>

  <a
  className="resume-btn"
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  >
    이력서 다운로드
  </a>

  <button
    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
    type="button"
    aria-label="메뉴 열기"
    aria-expanded={menuOpen}
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    <span />
    <span />
    <span />
  </button>
</header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability-badge">
                <span className="status-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <h1>진영환</h1>

              <p className="hero-role">Backend Developer</p>

              <p className="hero-description">
                Java와 Spring을 기반으로,
                <br />
                단순히 기능을 구현하는 데서 끝나지 않고
                <br />
                데이터 흐름과 운영까지 고려한 구조를 고민하는
                <br />
                백엔드 개발자입니다.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn primary">
                  프로젝트 보기
                </a>

                <a
                  href="https://github.com/jinyounghwan"
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary"
                >
                  GitHub
                </a>

                <a href="#contact" className="btn secondary">
                  Contact
                </a>
              </div>

             <div className="hero-downloads">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                이력서.pdf
              </a>

              <a
                href="/career-description.pdf"
                target="_blank"
                rel="noreferrer"
              >
                경력기술서.pdf
              </a>
            </div>
            </div>

            <div className="hero-visual">
              <div className="tech-panel">
                <div className="tech-panel-header">
                  <div>
                    <p className="tech-kicker">ENGINEERING FOCUS</p>
                    <h3>Backend Stack</h3>
                  </div>

                  <span className="tech-status">CURRENT</span>
                </div>

                <div className="tech-groups">
                  {techGroups.map((group) => (
                    <div className="tech-group" key={group.title}>
                      <span className="tech-group-title">
                        {group.title}
                      </span>

                      <div className="tech-tags">
                        {group.items.map((item) => (
                          <span className="tech-tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tech-summary">
                  <div>
                    <strong>API</strong>
                    <span>외부 시스템 연동</span>
                  </div>

                  <div>
                    <strong>Batch</strong>
                    <span>스케줄 기반 처리</span>
                  </div>

                  <div>
                    <strong>Ops</strong>
                    <span>배포 / 운영 경험</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3+ Years</strong>
              <span>Backend Experience</span>
            </div>

            <div>
              <strong>Java / Spring</strong>
              <span>Main Stack</span>
            </div>

            <div>
              <strong>API / Batch</strong>
              <span>Integration Experience</span>
            </div>

            <div>
              <strong>AWS Lightsail</strong>
              <span>Personal Deployment</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL DOWN</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section id="about" className="section content-section">
  <div className="section-heading">
    <p className="eyebrow">ABOUT</p>
    <h2>
      좋은 구조가
      <br />
      좋은 서비스를 만든다고 믿습니다.
    </h2>
  </div>

  <div className="about-layout">
    <div className="about-copy">
      <p>
        Java와 Spring을 중심으로 백엔드 시스템을 개발해왔습니다.
      </p>

      <p>
        단순히 기능이 동작하는 것에 그치지 않고,
        데이터가 어떤 흐름으로 이동하는지,
        실패 상황에서 어떻게 복구할 수 있는지,
        운영 환경에서 어떤 문제가 발생할 수 있는지를 함께 고민합니다.
      </p>

      <p>
        외부 API 연동, 배치 처리, 데이터 동기화,
        데이터베이스 연동과 운영 이슈 대응 경험을 바탕으로
        유지보수하기 쉽고 안정적으로 운영할 수 있는 구조를 만들고자 합니다.
      </p>
    </div>

    <div className="about-cards">
      <article className="about-card reveal">
        <div className="about-icon">
          <FaCubes />
        </div>
        <span className="about-number">01</span>
        <h3>Structure</h3>
        <p>
          기능 하나만 보는 것이 아니라
          전체 데이터 흐름과 시스템 구조를 함께 봅니다.
        </p>
      </article>

      <article className="about-card reveal">
        <div className="about-icon">
          <FaServer />
        </div>
        <span className="about-number">02</span>
        <h3>Operation</h3>
        <p>
          실제 운영 환경에서 발생할 수 있는 장애와
          예외 상황까지 고려합니다.
        </p>
      </article>

      <article className="about-card reveal">
        <div className="about-icon">
          <FaChartLine />
        </div>
        <span className="about-number">03</span>
        <h3>Improvement</h3>
        <p>
          반복되는 문제를 단순히 처리하지 않고,
          원인을 찾아 구조적으로 개선하려고 합니다.
        </p>
      </article>
    </div>
  </div>
</section>

<section id="skills" className="section content-section">
  <div className="section-heading split-heading">
    <div>
      <p className="eyebrow">SKILLS</p>
      <h2>주요 기술 스택</h2>
    </div>

    <p className="section-description">
      실제 업무와 프로젝트에서 사용한 기술을 중심으로 정리했습니다.
    </p>
  </div>

  <div className="skills-grid">
    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaJava />
      </div>
      <span className="skill-label">Backend</span>
      <h3>Java / Spring</h3>

      <div className="skill-tags">
        <span>Java 17</span>
        <span>Spring</span>
        <span>Spring Boot</span>
        <span>Spring MVC</span>
        <span>MyBatis</span>
        <span>JPA</span>
      </div>

      <p>
        웹 백엔드 API, 업무 로직, 외부 시스템 연동 및
        배치 처리 구현 경험이 있습니다.
      </p>
    </article>

    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaDatabase />
      </div>
      <span className="skill-label">Database</span>
      <h3>RDBMS</h3>

      <div className="skill-tags">
        <span>Oracle</span>
        <span>MySQL</span>
        <span>MariaDB</span>
        <span>SQL</span>
      </div>

      <p>
        업무 데이터 조회·저장, SQL 작성,
        데이터 정합성 확인 및 운영 데이터 분석 경험이 있습니다.
      </p>
    </article>

    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaNetworkWired />
      </div>
      <span className="skill-label">Integration</span>
      <h3>API / Batch</h3>

      <div className="skill-tags">
        <span>REST API</span>
        <span>External API</span>
        <span>Batch</span>
        <span>Scheduler</span>
        <span>Data Sync</span>
      </div>

      <p>
        외부 API 통신과 상태별 배치 처리,
        대량 데이터 동기화 및 재처리 구조를 구현했습니다.
      </p>
    </article>

    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaServer />
      </div>
      <span className="skill-label">Infrastructure</span>
      <h3>Server / Deployment</h3>

      <div className="skill-tags">
        <span>Linux</span>
        <span>Nginx</span>
        <span>Tomcat</span>
        <span>JEUS</span>
        <span>AWS Lightsail</span>
      </div>

      <p>
        서버 배포와 운영 이슈 대응 경험이 있으며,
        AWS Lightsail은 개인 프로젝트 배포 과정에서 직접 구성했습니다.
      </p>
    </article>

    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaTools />
      </div>
      <span className="skill-label">Tools</span>
      <h3>Development Tools</h3>

      <div className="skill-tags">
        <span>Git</span>
        <span>Gradle</span>
        <span>Maven</span>
        <span>Jira</span>
        <span>DBeaver</span>
        <span>Postman</span>
      </div>

      <p>
        형상관리, 빌드, API 테스트,
        DB 조회 및 협업 도구를 실무에서 사용했습니다.
      </p>
    </article>

    <article className="skill-card reveal">
      <div className="skill-icon">
        <FaDesktop />
      </div>
      <span className="skill-label">Frontend</span>
      <h3>Web UI</h3>

      <div className="skill-tags">
        <span>JSP</span>
        <span>Thymeleaf</span>
        <span>JavaScript</span>
        <span>jQuery</span>
        <span>React</span>
      </div>

      <p>
        백엔드 업무와 함께 JSP/Thymeleaf 기반 화면을 다뤘으며,
        React는 개인 프로젝트에서 사용했습니다.
      </p>
    </article>
  </div>
</section>

       <section id="experience" className="section content-section">
  <div className="section-heading split-heading">
    <div>
      <p className="eyebrow">EXPERIENCE</p>
      <h2>주요 경력</h2>
    </div>

    <p className="section-description">
      Java / Spring 기반 백엔드 개발과
      외부 시스템 연동, 배치 처리, 운영 업무를 경험했습니다.
    </p>
  </div>

  <div className="timeline">
    <article className="timeline-item reveal">
      <div className="timeline-marker">
        <span />
      </div>

      <div className="timeline-period">
        <span>2023.01 — 2026.09</span>
        <strong>3년 9개월</strong>
      </div>

      <div className="timeline-content">
       <div className="timeline-title-row">
        <div className="company-heading">
          <div className="company-badge">DJ</div>

          <div>
            <h3>드제이</h3>
            <p>시스템개발본부 · 책임연구원</p>
          </div>
        </div>

        <span className="timeline-badge">Backend Developer</span>
      </div>

        <p className="timeline-summary">
          이커머스, 사내 업무 시스템, 제조 시스템 등 다양한 도메인에서
          API 개발, 외부 시스템 연동, 배치·스케줄러 개발,
          서버 운영 및 장애 대응 업무를 수행했습니다.
        </p>

        <div className="timeline-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Oracle</span>
          <span>MariaDB</span>
          <span>MySQL</span>
          <span>Batch</span>
          <span>External API</span>
          <span>JEUS</span>
        </div>
      </div>
    </article>

    <article className="timeline-item reveal">
      <div className="timeline-marker">
        <span />
      </div>

      <div className="timeline-period">
        <span>2021.10 — 2022.11</span>
        <strong>1년 2개월</strong>
      </div>

      <div className="timeline-content">
        <div className="timeline-title-row">
      <div className="company-heading">
        <div className="company-badge">KW</div>

        <div>
          <h3>기웅정보통신</h3>
          <p>솔루션개발팀 · 사원</p>
        </div>
      </div>

      <span className="timeline-badge">Web Developer</span>
    </div>

        <p className="timeline-summary">
          전자세금계산서 발행 서비스와 ERP 시스템을 개발하며
          인증서 관련 로직, API 개발, 대용량 처리,
          시스템 간 인터페이스 연동 및 쿼리 개선 업무를 담당했습니다.
        </p>

        <div className="timeline-tags">
          <span>Java</span>
          <span>Spring</span>
          <span>Spring Boot</span>
          <span>MSSQL</span>
          <span>ERP</span>
          <span>Certificate API</span>
          <span>Large Data</span>
        </div>
      </div>
    </article>
  </div>

  <div className="career-extra">
  <article className="reveal">
    <div className="career-extra-icon">
      <FaGraduationCap />
    </div>

    <span>EDUCATION</span>
    <strong>Java & Spring Framework 개발자 양성과정</strong>
    <p>그린아카데미 · 2021.04 — 2021.09</p>
  </article>

  <article className="reveal">
    <div className="career-extra-icon">
      <FaCertificate />
    </div>

    <span>CERTIFICATION</span>
    <strong>네트워크관리사 2급</strong>
    <p>한국정보통신자격협회 · 2018.09</p>
  </article>

  <article className="reveal">
    <div className="career-extra-icon">
      <FaGlobeAsia />
    </div>

    <span>OVERSEAS</span>
    <strong>Hungary / China</strong>
    <p>해외 공장 네트워크 인프라 구축 지원 및 통신 환경 구성</p>
  </article>
</div>
</section>

<section id="projects" className="section content-section">
  <div className="section-heading split-heading">
    <div>
      <p className="eyebrow">PROJECTS</p>
      <h2>주요 프로젝트</h2>
    </div>

    <p className="section-description">
      실무 프로젝트와 개인 프로젝트를 구분해 정리했습니다.
    </p>
  </div>

  <div className="project-category">
    <div className="project-category-heading">
      <span>01</span>
      <h3>Work Projects</h3>
    </div>

    <div className="work-project-grid">
      <article className="work-project-card reveal">
        <div className="project-top">
          <span className="project-company">드제이</span>
          <span className="project-kind">E-Commerce</span>
        </div>

        <div className="project-icon">
          <FaShoppingCart />
        </div>
        <h4>넷마블 힐러비 DNA</h4>

        <p>
          사용자 DNA 채취 후 샘플 및 상품 구매가 가능한
          이커머스 쇼핑몰 프로젝트입니다.
        </p>

        <ul>
          <li>배송 및 주문 관련 배치 / 스케줄러 개발</li>
          <li>외부 배송 API 기반 주문 처리 프로세스 구현</li>
          <li>주문 상태 기반 배치 로직 개발</li>
          <li>JSP 기반 화면 기능 개발 및 수정</li>
          <li>고객사 및 외부 업체 협업</li>
        </ul>

        <div className="project-stack">
          <span>Java</span>
          <span>Spring</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>JavaScript</span>
        </div>
      </article>

      <article className="work-project-card reveal">
        <div className="project-top">
          <span className="project-company">드제이</span>
          <span className="project-kind">Internal System</span>
        </div>

        <div className="project-icon">
          <FaFileSignature />
        </div>
        <h4>ECS 연봉계약시스템</h4>

        <p>
          사내 연봉 계약 업무를 전자화한 계약 시스템 구축 프로젝트입니다.
        </p>

        <ul>
          <li>백엔드 / 프론트엔드 기능 개발</li>
          <li>외부 전자서명 API 연동</li>
          <li>전자서명 계약 플로우 구현</li>
          <li>외부 시스템 인터페이스 개발</li>
          <li>화면 기능 및 업무 흐름 개선</li>
        </ul>

        <div className="project-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MariaDB</span>
          <span>Thymeleaf</span>
          <span>JavaScript</span>
        </div>
      </article>

      <article className="work-project-card reveal">
        <div className="project-top">
          <span className="project-company">드제이</span>
          <span className="project-kind">Manufacturing</span>
        </div>

        <div className="project-icon">
          <FaIndustry />
        </div>
        <h4>삼성SDI mEMS / mMES</h4>

        <p>
          제조 현장에서 사용되는 모바일 연동 시스템의
          개발 및 운영 업무를 수행했습니다.
        </p>

        <ul>
          <li>mEMS / mMES 백엔드 개발 및 운영</li>
          <li>모바일 연동 API 개발 및 개선</li>
          <li>JSP 화면 기능 개선 및 유지보수</li>
          <li>서버 환경 설정 및 운영 관리</li>
          <li>로그 및 메모리 분석 기반 장애 대응</li>
        </ul>

        <div className="project-stack">
          <span>Java</span>
          <span>Spring</span>
          <span>Spring Boot</span>
          <span>Oracle</span>
          <span>JSP</span>
        </div>
      </article>

      <article className="work-project-card reveal">
        <div className="project-top">
          <span className="project-company">드제이</span>
          <span className="project-kind">Web Service</span>
        </div>

        <div className="project-icon">
          <FaUserCog />
        </div>
        <h4>42dot 어드민 / 유저 사이트</h4>

        <p>
          어드민과 사용자 사이트 구축을 위한
          API 및 화면 기능 개발 프로젝트입니다.
        </p>

        <ul>
          <li>어드민 / 유저 사이트 API 개발</li>
          <li>화면 기능 구현 및 요구사항 반영</li>
          <li>기능 수정 및 화면 개발</li>
          <li>협력 업체 및 팀원과 개발 일정 조율</li>
        </ul>

        <div className="project-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>Thymeleaf</span>
          <span>JavaScript</span>
        </div>
      </article>

      <article className="work-project-card wide-project reveal">
        <div className="project-top">
          <span className="project-company">기웅정보통신</span>
          <span className="project-kind">Solution</span>
        </div>

        <div className="project-icon">
          <FaFileInvoiceDollar />
        </div>
        <h4>XPERP / BillMATE</h4>

        <p>
          전자세금계산서 발행 및 ERP 연동 서비스를 개발하고
          대용량 처리 성능 개선 업무를 수행했습니다.
        </p>

        <ul>
          <li>전자세금계산서 발행 서비스 백엔드 개발</li>
          <li>인증서 관련 로직 및 API 개발</li>
          <li>대용량 전자세금계산서 발행 프로세스 개발</li>
          <li>ERP 및 시스템 간 인터페이스 연동</li>
          <li>쿼리 / 호출 방식 개선 및 로그 분석</li>
        </ul>

        <div className="project-stack">
          <span>Java</span>
          <span>Spring</span>
          <span>Spring Boot</span>
          <span>MSSQL</span>
          <span>JavaScript</span>
        </div>
      </article>
    </div>
  </div>

  <div className="project-category personal-category">
    <div className="project-category-heading">
      <span>02</span>
      <h3>Personal Project</h3>
    </div>

    <article className="featured-project reveal">
      <div className="featured-project-copy">
        <div className="project-top">
          <span className="personal-badge">Featured</span>
          <span className="project-kind">Personal Project</span>
        </div>

        <h3>ParkEasy</h3>

        <p className="featured-subtitle">
          공공데이터 기반 현재 위치 주변 주차장 검색 서비스
        </p>

        <p className="featured-description">
          전국 단위 공공 주차장 데이터를 수집·정제하고,
          사용자의 현재 위치를 기준으로 주변 주차장을 탐색할 수 있도록
          구현한 개인 프로젝트입니다.
        </p>

        <div className="featured-points">
          <div>
            <strong>267K+</strong>
            <span>주차장 시설 데이터</span>
          </div>

          <div>
            <strong>Batch</strong>
            <span>페이지 기반 데이터 수집</span>
          </div>

          <div>
            <strong>AWS</strong>
            <span>Lightsail 직접 배포</span>
          </div>

          <div>
            <strong>HTTPS</strong>
            <span>실서비스 운영</span>
          </div>
        </div>

        <div className="project-actions">
          <a
            href="https://parkeasy.kr"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/jinyounghwan/parkeasy"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>

     <div className="featured-project-visual">
  <div className="project-device-stage">
    <div className="project-browser">
      <div className="project-browser-header">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>

        <span>https://parkeasy.kr</span>
      </div>

      <img
        src="/images/parkeasy-main.png"
        alt="ParkEasy 데스크톱 서비스 화면"
        className="project-screen"
      />
    </div>

    <div className="mobile-mockup">
      <div className="mobile-notch" />

      <img
        src="/images/parkeasy-mobile.png"
        alt="ParkEasy 모바일 서비스 화면"
      />
    </div>
  </div>
</div>
    </article>
  </div>
</section>

<section id="troubleshooting" className="section content-section">
  <div className="section-heading split-heading">
    <div>
      <p className="eyebrow">TROUBLESHOOTING</p>
      <h2>문제 해결 경험</h2>
    </div>

    <p className="section-description">
      단순히 오류를 처리하는 데서 끝나지 않고,
      원인을 분석하고 재발 가능성을 줄이는 방향으로 해결해왔습니다.
    </p>
  </div>

  <div className="trouble-grid">
    <article className="trouble-card reveal">
      <div className="trouble-top">
        <span className="trouble-index">CASE 01</span>
        <span className="trouble-type">DATA SYNC</span>
      </div>

      <h3>대량 공공데이터 수집 실패 복구</h3>

      <div className="trouble-flow">
        <div className="trouble-step">
          <span className="step-label">Problem</span>
          <p>
            특정 페이지 요청이 실패하면 전체 동기화를
            처음부터 다시 수행해야 하는 문제가 있었습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step">
          <span className="step-label">Solution</span>
          <p>
            페이지 단위 처리, 진행 상태 저장,
            실패 페이지 기록 및 Retry 구조를 적용했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step result-step">
          <span className="step-label">Result</span>
          <p>
            전체 재실행 없이 실패 구간 중심으로
            복구할 수 있는 구조로 개선했습니다.
          </p>
        </div>
      </div>

      <div className="trouble-tags">
        <span>Batch</span>
        <span>Retry</span>
        <span>Checkpoint</span>
        <span>Data Sync</span>
      </div>
    </article>

    <article className="trouble-card reveal">
      <div className="trouble-top">
        <span className="trouble-index">CASE 02</span>
        <span className="trouble-type">QUERY</span>
      </div>

      <h3>주변 주차장 조회 구조 개선</h3>

      <div className="trouble-flow">
        <div className="trouble-step">
          <span className="step-label">Problem</span>
          <p>
            시설별 운영정보와 실시간 정보를 개별 조회해
            조회 대상 증가에 따라 Query가 늘어날 수 있었습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step">
          <span className="step-label">Solution</span>
          <p>
            시설 ID 목록을 기준으로
            Operation / Realtime 데이터를 일괄 조회하도록 변경했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step result-step">
          <span className="step-label">Result</span>
          <p>
            조회 대상에 따라 불필요하게 Query 수가 증가하는
            구조를 줄였습니다.
          </p>
        </div>
      </div>

      <div className="trouble-tags">
        <span>JPA</span>
        <span>Batch Query</span>
        <span>Performance</span>
      </div>
    </article>

    <article className="trouble-card reveal">
      <div className="trouble-top">
        <span className="trouble-index">CASE 03</span>
        <span className="trouble-type">NETWORK</span>
      </div>

      <h3>외부 HTTPS API 서버 통신 문제</h3>

      <div className="trouble-flow">
        <div className="trouble-step">
          <span className="step-label">Problem</span>
          <p>
            로컬 Postman에서는 정상 호출되지만
            운영 서버에서는 외부 HTTPS API 요청이 실패했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step">
          <span className="step-label">Solution</span>
          <p>
            PAC Proxy, Reverse Proxy, 방화벽과
            서버 네트워크 환경을 함께 점검했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step result-step">
          <span className="step-label">Result</span>
          <p>
            애플리케이션 외부의 네트워크 경로까지
            범위를 넓혀 장애 원인을 추적했습니다.
          </p>
        </div>
      </div>

      <div className="trouble-tags">
        <span>HTTPS</span>
        <span>Proxy</span>
        <span>Firewall</span>
        <span>Linux</span>
      </div>
    </article>

    <article className="trouble-card reveal">
      <div className="trouble-top">
        <span className="trouble-index">CASE 04</span>
        <span className="trouble-type">OPERATION</span>
      </div>

      <h3>운영 서버 장애 원인 분석</h3>

      <div className="trouble-flow">
        <div className="trouble-step">
          <span className="step-label">Problem</span>
          <p>
            제조 시스템 운영 중 간헐적인 서버 다운과
            응답 이상 현상이 발생했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step">
          <span className="step-label">Solution</span>
          <p>
            서버 로그, 메모리 사용량,
            애플리케이션 상태와 운영 설정을 함께 분석했습니다.
          </p>
        </div>

        <span className="flow-arrow">→</span>

        <div className="trouble-step result-step">
          <span className="step-label">Result</span>
          <p>
            단순 재기동보다 원인 분석과
            운영 안정화 중심으로 개선했습니다.
          </p>
        </div>
      </div>

      <div className="trouble-tags">
        <span>Logging</span>
        <span>Memory</span>
        <span>Server Ops</span>
        <span>Monitoring</span>
      </div>
    </article>
  </div>
</section>

<section id="contact" className="section contact-section">
  <div className="contact-layout">
    <div className="contact-copy">
      <p className="eyebrow">CONTACT</p>

      <h2>
        함께 더 나은 서비스를
        <br />
        만들고 싶습니다.
      </h2>

      <p>
        새로운 환경에서도 빠르게 구조를 이해하고,
        문제를 분석하며 꾸준히 개선하는 개발자가 되겠습니다.
      </p>
    </div>

    <div className="contact-links">
      <a
        href="https://github.com/jinyounghwan"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <div>
          <span>GitHub</span>
          <strong>github.com/jinyounghwan</strong>
        </div>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="mailto:YOUR_EMAIL" className="contact-item">
        <div>
          <span>Email</span>
          <strong>dudghksdl45@gmail.com</strong>
        </div>
        <span className="contact-arrow">↗</span>
      </a>

      <a href="#" className="contact-item">
        <div>
          <span>Resume</span>
          <strong>이력서 다운로드</strong>
        </div>
        <span className="contact-arrow">↓</span>
      </a>

      <a href="#" className="contact-item">
        <div>
          <span>Career Description</span>
          <strong>경력기술서 다운로드</strong>
        </div>
        <span className="contact-arrow">↓</span>
      </a>
    </div>
  </div>

  <footer className="footer">
    <span>© 2026 Jinyounghwan</span>
    <span>Backend Developer Portfolio</span>
  </footer>
</section>
      </main>
    </div>
  )
}

export default App