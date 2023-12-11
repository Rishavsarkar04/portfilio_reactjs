import { project } from "../data/data";
import { MdArrowOutward } from "react-icons/md";
export default function Project() {
  return (
    <section className="project">
      <div className="project_header">My Projects</div>
      <div className="project_container">
        {project.map((proj) => {
          return (
            <div className="project_1" key={proj.id}>
              <img src="/img/img1.jpg" alt="/img/img1.jpg"></img>
              <div className="project_1_container">
                <div className="project_1_container_header">{proj.name}</div>
                <div className="project_1_container_desc">{proj.desc}</div>

                <ul className="project_1_container_techs">
                  {proj.techs.map((tech, ind) => {
                    return (
                      <li className="tect_list" key={ind}>
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <div className="buttons">
                  <button className="project_links">
                    Visit Site <MdArrowOutward />
                  </button>
                  <button className="github_link">
                    Github <MdArrowOutward />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="project_1">
          <img src="/img/img1.jpg" alt=""></img>
          <div className="project_1_container">
            <div className="project_1_container_header">project 1</div>
            <div className="project_1_container_desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              neque.
            </div>
            <ul className="project_1_container_techs">
              <li className="tect_list">react</li>
              <li className="tect_list">css</li>
              <li className="tect_list">js</li>
              <li className="tect_list">node js</li>
            </ul>
            <div className="buttons">
              <button className="project_links">Visit Site</button>
              <button className="github_link">Github</button>
            </div>
          </div>
        </div>
        <div className="project_2">
          <img src="/img/img2.jpg" alt=""></img>
          <div className="project_2_container">
            <div className="project_2_container_header">project 2</div>
            <div className="project_2_container_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              nemo, in voluptatem ex suscipit accusamus ipsam nulla libero
              voluptas cumque?
            </div>
            <ul className="project_2_container_techs">
              <li className="tect_list">react</li>
              <li className="tect_list">css</li>
              <li className="tect_list">js</li>
              <li className="tect_list">node js</li>
            </ul>
            <div className="buttons">
              <button className="project_links">Visit Site</button>
              <button className="github_link">Github</button>
            </div>
          </div>
        </div>
        <div className="project_3">
          <img src="/img/img3.jpg" alt=""></img>
          <div className="project_3_container">
            <div className="project_3_container_header">project 3</div>
            <div className="project_3_container_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              nemo, in voluptatem ex suscipit accusamus ipsam nulla libero
              voluptas cumque?
            </div>
            <ul className="project_3_container_techs">
              <li className="tect_list">react</li>
              <li className="tect_list">css</li>
              <li className="tect_list">js</li>
              <li className="tect_list">node js</li>
              <li className="tect_list">node js</li>
            </ul>
            <div className="buttons">
              <button className="project_links">Visit Site</button>
              <button className="github_link">Github</button>
            </div>
          </div>
        </div>
        <div className="project_4">
          <img src="/img/img4.jpg" alt=""></img>
          <div className="project_4_container">
            <div className="project_4_container_header">project 4</div>
            <div className="project_4_container_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              nemo, in voluptatem ex suscipit accusamus ipsam nulla libero
            </div>
            <ul className="project_4_container_techs">
              <li className="tect_list">react</li>
              <li className="tect_list">css</li>
              <li className="tect_list">js</li>
              <li className="tect_list">node js</li>
            </ul>
            <div className="buttons">
              <button className="project_links">Visit Site</button>
              <button className="github_link">Github</button>
            </div>
          </div>
        </div> */}
        {/* <div className="project_5">
          <div className="project_5_header"></div>
          <div className="project_5_desc"></div>
          <ul className="project_5_techs"></ul>
        </div>
        <div className="project_6">
          <div className="project_6_header"></div>
          <div className="project_6_desc"></div>
          <ul className="project_6_techs"></ul>
        </div> */}

        {/* <div className="project_7"></div>
        <div className="project_8"></div> */}
      </div>
    </section>
  );
}
