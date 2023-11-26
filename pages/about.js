import Head from 'next/head';
import Image from 'next/image';
import Menu from '/components/Menu';

export default function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>About Me</title>
      </Head>

      <header>
        <div>
          <Menu />
        </div>
      </header>

      <main style={{ backgroundColor: 'white', padding: '1rem', textAlign: 'left' }}>
        <section>
          <h1>About Me</h1>
          <p>
            My name is Kyle Moses, a Computer Science graduate from Lewis University based in Lockport, IL. Currently working as an Assistant Manager at Sonic Drive-In, I am actively seeking opportunities in the field of Computer Science.
          </p>
        </section>

        <section>
          <h1>Education</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
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

        <section>
          <h1>Online Certifications</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 auto' }}>
              <h2>ServSafe Certification</h2>
              <p>ServSafe Certified, August 2023 to August 2028</p>
              <Image
                src="/certification-image.jpg"
                alt="ServSafe Certification"
                width={300}
                height={200}
              />
            </li>
            <li style={{ margin: '0 auto' }}>
              <h2>American Red Cross Lifeguard Certificate</h2>
              <p>Lifeguard Certified, December 2018 to December 2020</p>
              <Image
                src="/certification-image.jpg"
                alt="Lifeguard Certification"
                width={300}
                height={200}
              />
            </li>
          </ul>
        </section>

        <section>
          <h1>Clubs and Sports</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <h2>Water Polo and Swim Teams</h2>
              <p>
                Competed as a member of the Water Polo and Swim Teams for Lockport Township High School all four years. I played at the Junior Varsity level for 2 years and the Varsity level for 2 years. I was voted in as captain of the Varsity squad my senior year for water polo. Both years I was on the Varsity squad we were one of the top-ranked teams in the state. In 2018, we had the best regular season record in our school history (27-5). I learned many life lessons playing these sports such as discipline, respect, and loyalty.
              </p>
              {/* Add image for Water Polo and Swim Teams */}
            </li>
            <li>
              <h2>Lewis University Call of Duty Team</h2>
              <p>
                Served as Captain of the Call of Duty Team for all 4 years. Participated in several Collegiate level leagues such as the College CoD League (CCL), Tespa, and NACE. We were a successful small collegiate team despite competing against universities with substantially more resources.
              </p>
              {/* Add image for Lewis University Call of Duty Team */}
            </li>
            {/* Add more clubs and sports if applicable */}
          </ul>
        </section>
      </main>
    </div>
  );
}

