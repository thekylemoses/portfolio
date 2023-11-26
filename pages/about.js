import Head from 'next/head';
import Image from 'next/image';
import Menu from '/components/Menu';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>

      <header>
        <div>
          <Menu />
        </div>
      </header>

      <main>
        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Education</h1>
            <ul>
              <li>
                <h2>College Name</h2>
                <p>Degree Program, Graduation Year</p>
                <p>Description of program and any notable accomplishments</p>
                <Image
                  src="/imgs/college-image.png"
                  alt="Lewis University"
                  width={300}
                  height={200}
                />
              </li>
              <li>
                <h2>High School Name</h2>
                <p>Graduation Year</p>
                <p>Description of program and any notable accomplishments</p>
                <Image
                  src="/imgs/high-school-image.jpg"
                  alt="Lockport Township High School"
                  width={300}
                  height={200}
                />
              </li>
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Online Certifications</h1>
            <ul>
              <li>
                <h2>Certification Name</h2>
                <p>Certification Issuer, Year</p>
                <p>Description of certification and any notable accomplishments</p>
                <Image
                  src="/certification-image.jpg"
                  alt="Certification Name"
                  width={300}
                  height={200}
                />
              </li>
              <li>
                <h2>Certification Name</h2>
                <p>Certification Issuer, Year</p>
                <p>Description of certification and any notable accomplishments</p>
                <Image
                  src="/certification-image.jpg"
                  alt="Certification Name"
                  width={300}
                  height={200}
                />
              </li>
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Sports and Clubs</h1>
            <ul>
              <li>
                <h2>Sport or Club Name</h2>
                <p>Description of sport or club and any notable accomplishments</p>
                <Image
                  src="/sport-or-club-image.jpg"
                  alt="Sport or Club Name"
                  width={300}
                  height={200}
                />
              </li>
              <li>
                <h2>Sport or Club Name</h2>
                <p>Description of sport or club and any notable accomplishments</p>
                <Image
                  src="/sport-or-club-image.jpg"
                  alt="Sport or Club Name"
                  width={300}
                  height={200}
                />
              </li>
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Volunteer Experience</h1>
            <ul>
              <li>
                <h2>Organization Name</h2>
                <p>Role, Dates</p>
                <p>Description of volunteer work and any notable accomplishments</p>
                </li>
              <li>
                <h2>Organization Name</h2>
                <p>Role, Dates</p>
                <p>Description of volunteer work and any notable accomplishments</p>
              </li>
            </ul>
          </section>
        </div>
        </main>
</div>
);
}
