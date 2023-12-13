import { tabs } from "../data/data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer_navs">
        {" "}
        <ul>
          {tabs.map((tab, ind) => {
            return (
              <motion.li key={tab.id} className={`nav_links_home_${tab.key}`}>
                <Link activeClass="nav_active" to={tab.id} smooth={true}>
                  {tab.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="footer_copyright">
        Copyright &#169; 2023 Rishav Sarkar. All Rights Are Reseved{" "}
      </div>
    </section>
  );
}
