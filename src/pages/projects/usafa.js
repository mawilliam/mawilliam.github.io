import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import Highlight from "../../components/project-highlight";
import unscheduledGIF from "../../assets/usafa/Unscheduled.gif";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
`;

const ProjectTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 64px;
  line-height: 80px;
  text-transform: none;
`;

const SectionTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  text-transform: none;
`;

const ProjectDescription = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 28px;
  font-weigth: 400;
  opacity: 0.8;
`

const FigCaption = styled.figcaption`
  font-size: 14px;
  line-height: 22px;
  font-weigth: 400;
  opacity: 0.8;
`;

const ListItem = styled.li`
  margin-bottom: 2px;
`;

const TwoColumnLeft = styled.div`
  display: -ms-grid;
  display: grid;
  grid-column-gap: 20px;
  grid-template-areas: ". .";
  -ms-grid-columns: 2fr 20px 1fr;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const TwoColumnRight = styled.div`
  display: -ms-grid;
  display: grid;
  grid-column-gap: 20px;
  grid-template-areas: ". .";
  -ms-grid-columns: 1fr 20px 2fr;
  grid-template-columns: 1fr 2fr;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const TwoColumn = styled.div`
  display: -ms-grid;
  display: grid;
  grid-column-gap: 20px;
  grid-template-areas: ". .";
  -ms-grid-columns: 1fr 20px 1fr;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Image = ({ photo }) => {
  const imageData = useStaticQuery(graphql`
    query {
      summary: file(relativePath: {eq: "usafa/USAFANextHome.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      distribution: file(relativePath: {eq: "usafa/USAFANextDistribution.png"}) {
        childImageSharp {
          fixed (width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gif: file(relativePath: {eq: "usafa/Unscheduled.gif"}) {
        childImageSharp {
          fixed (width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  switch (photo) {
    case "thumbnail":
      return imageData.summary.childImageSharp.fluid;
    case "summary":
      return (
        <Img
          fluid={imageData.summary.childImageSharp.fluid}
          alt="Image of the home screen of the Power BI dashboard for this project"
        />
      );
    case "dist":
      return (
        <Img
          fixed={imageData.distribution.childImageSharp.fixed}
          alt="Image of a histogram showing the distribution of students' maximum academic courses taken in any trimester"
        />
      );
    case "gif":
      return (
        <Img
          fixed={imageData.gif.childImageSharp.fixed}
          alt="Animation exploring unscheduled course requests and drilling through to a single student to see their schedule and conflicts"
        />
      )
  }
  
};

const HighlightRow = () => {
  const title = "Scheduling Courses at USAFA";
  const description = `
    The Superintendent (president at a typical university) of the U.S. Air Force Academy was considering
    changing its scheduling paradigm in 
    order to enable students to have more opportunities for experiential growth and learning during their
    time. I developed a prototype to determine whether moving from a semester to a trimester format
    would be possible and built a Microsoft Power BI dashboard to enable stakeholders to explore the
    solution.
  `;
  const link = "/projects/usafa";
  const tags = ['Python', 'PowerBI'];
  const photo = Image({photo: "thumbnail"})
  const alt="Image of the home screen of the Power BI dashboard for this project";

  return (
    <Highlight
      title={title}
      description={description}
      tags={tags}
      link={link}
      photo={photo}
      alt={alt}
    />
  )
}

const Project = () => {

  return (
    <Layout>
      <TextContainer>
        <ProjectTitle>Course Scheduling at the U.S. Air Force Academy</ProjectTitle>
        <TwoColumn>
          <div>
            <SectionTitle>
              Background
            </SectionTitle>
            <ProjectDescription>
              The U.S. Air Force Academy (USAFA) Superintendent (president at a typical university) had 
              been exploring alternative scheduling paradigms. Since USAFA has many more graduation 
              requirements and an entirely different business model than most other universities, 
              scheduling courses is driven by student demand rather than by course supply. That inverse
              relationship and unique requirements makes scheduling courses much more challenging. 
              Furthermore, it means that typical commercial solutions would not work off the shelf.
            </ProjectDescription>
          </div>
          <div>
            <SectionTitle>
              My Contributions
            </SectionTitle>
            <ProjectDescription>
              One alternative was to move from a semester to a trimester format.
              My role was to develop a prototype that scheduled student course requests from a prior 
              academic year subject to all of the practical constraints. Furthermore, I developed a 
              Microsoft Power BI dashboard to share the results with the many stakeholders across 
              campus so they could explore and gain confidence in the solution. This enabled stakeholders
              to identify conflicts for students and tailor their course offering preferences to alleviate
              those conflicts.
            </ProjectDescription>
          </div>
        </TwoColumn>
        <figure style={{marginTop: `50px`, marginBottom: `50px`}}>
          <Image photo="summary" />
          <FigCaption>
            The image above displays the home screen of the Power BI dashboard in the Microsoft
            Team. Since our organization used Office 365, everyone could access the dashboard in 
            Microsoft Teams or SharePoint. This was very powerful as it exposed much of the data 
            to the stakeholders which helped them understand it better and provide feedback to improve
            the solution. 
          </FigCaption>
        </figure>
        <TwoColumn>
          <div>
            <SectionTitle>
              Results
            </SectionTitle>
            <ProjectDescription>
              My prototype was able to schedule over 63K course requests from 4380 students with only 339
              unscheduled academic course requests which was on par with the current scheduling system. 
              The algorithm's features include:       
              <ul>
                <ListItem>
                  General solution: independent of number of semesters or class periods
                </ListItem>
                <ListItem>
                  Priority queue based on student and course flexibility
                </ListItem>
                <ListItem>
                  Choice to queue by individual students or course requests
                </ListItem>
                <ListItem>
                  Honors practical constraints including lab length, section size, prerequisites, and faculty preferences
                </ListItem>
                <ListItem>
                  Distributes student academic course load, if possible
                </ListItem>
              </ul>
            </ProjectDescription>
          </div>
          <figure>
            <Image photo="dist" />
            <FigCaption>
              The above image is one example of the dashboards provided to all stakeholders. The motivation
              for this particular dashboard is to show the impact on students' course load. The typical 
              student takes 12 academic courses per year so it makes sense that the majority of students
              have at most four courses in a trimester. There are a few students that are scheduled for 
              six academic courses in a single trimester which is concerning so we would be able to dig
              into whether that is a problem.
            </FigCaption>
          </figure>
          
        </TwoColumn>
        <TwoColumnLeft>
          <figure>
            <img
              src={unscheduledGIF}
              alt="Animation exploring unscheduled course requests and drilling through to a single student to see their schedule and conflicts"
            />
            <FigCaption>
              The above animation
              explores unscheduled course requests by first clicking on a particular major which causes
              the other visuals on the page to update. Next, it drills through on an individual student
              which brings up a new page showing that particular student's schedule. Finally, you are
              able to explore the schedule conflicts for that student which provides administrators
              insight into potential solutions.
            </FigCaption>
          </figure>
          <div>
            <SectionTitle>
              Highlight
            </SectionTitle>
            <ProjectDescription>
              While I did not have time to incorporate a heuristic to improve the greedy solution, I am
              most proud of the Power BI visualizations. I was able to generate new visualizations 
              quickly from stakeholder requests because my data model was so simple. It was also quite
              useful as a sanity check of the output while adding new features as well as providing an 
              avenue for feedback from users. This is something that was lacking from the current solution
              and not possible from many of the commercial products under consideration.
            </ProjectDescription>
          </div>
        </TwoColumnLeft>
        <TwoColumn>
          <div>
            <SectionTitle>
              Current Status
            </SectionTitle>
            <ProjectDescription>
              The decision to move to a new scheduling paradigm was delayed due to the COVID-19 pandemic
              and, unfortunately, I completed my assignment there in June. However, the Power BI 
              dashboard is still live in the Microsoft Team and my prototype is up to date in case the 
              Superintendent revisits the decision.
            </ProjectDescription>
          </div>
          <div>
            <SectionTitle>
              Lessons Learned
            </SectionTitle>
            <ProjectDescription>
              I learned an incredible amount working on this project. This was my largest software
              development effort with nine custom objects and over one thousand of lines of Python. However,
              using Power BI to create compelling visualizations was my biggest takeaway from the project.
              Since our organization was already using O365, it made sharing these visualizations easy.
              It also motivated me to learn JavaScript and D3 in order to always be sure that I could
              share compelling visualizations without relying on any special software.
            </ProjectDescription>
          </div>
        </TwoColumn>
      </TextContainer>
    </Layout>
  )
};

const ProjectExport = ( {type} ) => {
  switch (type) {
    case "highlight":
      return (<HighlightRow />)
    default:
      return (<Project />)
  }
};

ProjectExport.propTypes = {
  type: PropTypes.oneOf(['project', 'highlight'])
};

ProjectExport.defaultProps = {
  type: 'project'
};

export default ProjectExport;