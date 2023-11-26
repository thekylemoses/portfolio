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
            <h1>About Me</h1>
            <p>
              My name is Kyle Moses, a Computer Science graduate from Lewis University based in Lockport, IL. Currently working as an Assistant Manager at Sonic Drive-In, I am actively seeking opportunities in the field of Computer Science.
            </p>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Education</h1>
            <ul>
              <li>
                <h2>Lewis University</h2>
                <p>Bachelor of Science in Computer Science, May 2023</p>
                <p>
                  Proficient in HTML, CSS, Python, Java, and C, demonstrating a strong aptitude for programming languages. Dedicated and hardworking, consistently striving to deliver exceptional results.
                </p>
                <Image
                  src="/imgs/college-image.png"
                  alt="Lewis University"
                  width={300}
                  height={200}
                />
              </li>
              <li>
                <h2>Lockport Township High School</h2>
                <p>High School Diploma, June 2019</p>
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
                <h2>ServSafe Certification</h2>
                <p>ServSafe Certified, August 2023 to August 2028</p>
                <p>Description of certification and any notable accomplishments</p>
                <Image
                  src="/certification-image.jpg"
                  alt="ServSafe Certification"
                  width={300}
                  height={200}
                />
              </li>
              {/* Add more certifications if applicable */}
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Skills</h1>
            <ul>
              <li>Java</li>
              <li>Computer Science</li>
              {/* Add more skills from the provided information */}
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Projects</h1>
            <ul>
              <li>
                <h2>Obsidian League</h2>
                <p>
                  This was a Call of Duty League that I built  by myself and ran in my spare time from 2017 – 2021...
                </p>
                {/* Add links to the website, Twitter, and Drive Files */}
              </li>
              <li>
                <h2>MLB Roster Builder</h2>
                <p>
                  A tool that can be used by a baseball manager to list his roster and their stats. The stats inputted will also output calculated baseball stats such as AVG, SLG, OPS, and ERA.
                </p>
                {/* Add link to GitHub */}
              </li>
              {/* Add more projects if applicable */}
            </ul>
          </section>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <section>
            <h1>Clubs and Sports</h1>
            <ul>
              <li>
                <h2>Water Polo and Swim Teams</h2>
                <p>
                  Competed as a member of the Water Polo and Swim Teams for Lockport Township High School all four years...
                </p>
                {/* Add image for Water Polo and Swim Teams */}
              </li>
              <li>
                <h2>Lewis University Call of Duty Team</h2>
                <p>
                  Served as Captain of the Call of Duty Team for all 4 years...
                </p>
                {/* Add image for Lewis University Call of Duty Team */}
              </li>
              {/* Add more clubs and sports if applicable */}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
