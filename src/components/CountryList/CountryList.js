import React from "react";
import { countries } from "./mapping";
import { Link } from "react-router-dom";
import styles from "./CountryList.module.scss";

const CountryList = () => {
  return (
    <div className={styles.countryListWrapper}>
      <h1 className={styles.pageTitle}>Select a country to see the latest news</h1>
      <section className={styles.countryListSection}>
        {
          countries.map(country => {
          const { code, flagUrl } = country;
          return (
            <Link to={`/news/${code}`} className={styles.country}>
              <img className={styles.countryFlag} src={flagUrl} alt={code+' flag'} />
              <h2>{country.name}</h2>
            </Link>
          );
          })
        }
      </section>
    </div>
  )};

export default React.memo(CountryList);
