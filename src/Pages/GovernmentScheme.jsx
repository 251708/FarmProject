import React from 'react'
import { useState } from 'react';
import './GovernmentScheme.css';
import Navbar from '../Component/Navbar';

const Card = ({ title, content, link }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      {showMore && (
        <div className="more-content">
          <p>
            {content} link:
            <a href={link}>{link}</a>
          </p>
        </div>
      )}
      <p className="read-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Read less' : 'Read more'}
      </p>
    </div>
  );
};


const GovernmentScheme = () => {

  const cardsData = [
    {
      title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      content:
        'The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme that provides income support to the families of landholding farmers in India. All landholding farmers\' families in India are eligible for the scheme, subject to certain exclusions. An annual financial benefit of ₹6,000/- is provided directly to the bank accounts of eligible farmers in three equal installments of ₹2,000/- each.',
      link: 'https://pmkisan.gov.in/#MainContent',
    },
    {
      title: 'Pradhan Mantri Kisan Maan Dhan Yojana (PM-KMY)',
      content:
        'The Pradhan Mantri Kisan Maan Dhan Yojana (PM-KMY) is a voluntary and contributory pension scheme launched by the Indian government to provide social security to small and marginal farmers (SMFs) after they reach retirement age. Open to small and marginal farmers aged 18-40 years who own cultivable land up to 2 hectares. Offers a minimum fixed pension of ₹3,000 per month upon reaching 60 years of age. The government matches the monthly contribution made by the farmer.',
      link: 'https://maandhan.in/',
    },
    {
      title: 'Kisan Credit Card (KCC)',
      content:
        'KCC provides concessional credit to farmers for their cultivation and other needs. It acts as a single window for various agricultural needs, simplifying the loan application process. Primarily for farmers holding cultivable land. Banks assess eligibility based on factors like landholding, crop pattern, and credit history. Offers a flexible credit limit to meet various expenses like purchasing seeds, fertilizers, pesticides, and machinery. It can also cover post-harvest storage, household needs, and investment in allied agricultural activities.',
      link: 'https://www.myscheme.gov.in/schemes/kcc',
    },
    {
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      content:
        'It aims to provide financial protection to farmers against unforeseen losses caused by natural calamities, pests, and diseases. Provides insurance cover for a wide range of notified crops, including food & oilseeds, horticulture crops, and annual commercial crops. Coverage extends from pre-sowing to post-harvest stages. In case of crop loss due to insured perils, farmers receive compensation based on the pre-determined sum insured for their specific crop. This helps them recover financially and re-start farming activities.',
      link: 'https://www.pmfby.gov.in/',
    },
    {
      title: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)',
      content:
        'The Pradhan Mantri Krishi Sinchai Yojana (PMKSY), launched in 2015, is a large-scale government initiative aimed at improving irrigation infrastructure and water management practices in India. It has a two-pronged approach: expanding irrigated land area and promoting water use efficiency. This central theme focuses on creating new sources of irrigation and improving existing ones to bring more land under assured irrigation.',
      link: 'https://pmksy.gov.in/',
    },
    {
      title: 'Soil Health Card Scheme',
      content:
        'The Soil Health Card Scheme, launched by the Government of India in 2015, is a crucial initiative aimed at empowering farmers with knowledge about their soil health. This empowers them to make informed decisions about fertilizer use and improve agricultural productivity and sustainability. The scheme provides farmers with free soil testing services every three years. Soil samples are collected from their landholdings and analyzed in designated laboratories. By following the informed fertilizer recommendations, farmers can improve soil health and fertility in the long run. This leads to better crop yields and potentially higher farm incomes.',
      link: 'https://soilhealth.dac.gov.in/home',
    },
    {
      title: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
      content:
        'The Pradhan Mantri Gram Sadak Yojana (PMGSY), launched in December 2000, is a centrally sponsored scheme that aims to provide all-weather road connectivity to unconnected villages in rural India. It plays a vital role in bridging the rural-urban divide and boosting socio-economic development in remote areas. The scheme prioritizes connecting habitations with a population of 500 and above in plain areas and 250 and above in hilly areas, tribal areas, and other backward regions. This ensures even development across rural India.',
      link: 'https://omms.nic.in/',
    },
    {
      title: 'Market Intervention Scheme, Price Support Scheme (PSS)',
      content:
        'Both MIS and PSS are government schemes in India that aim to support farmers by ensuring they receive a fair price for their produce. (MIS)-To protect farmers from distress sale during bumper harvests when market prices for perishable and horticultural commodities fall sharply. (PSS)To ensure farmers receive a minimum price (MSP) set by the government for certain food grains. This protects them from significant price fluctuations and provides a safety net.',
      link: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1809685',
    },
  ];
  return (
    <div>
   <Navbar />
      <div className="card-out">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} link={card.link} />
        ))}
      </div>
    </div>
  )
}

export default GovernmentScheme;
