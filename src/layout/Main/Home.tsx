import { useState } from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  width: full;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 1rem;
`;

const SaveDateLink = styled.a`
  display: block;
  text-align: center;
  text-decoration: underline;
  color: white;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5rem;
`;

const CoupleName = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 1rem;
  color: #1f2937; /* gray-900 */
`;

const BorderBox = styled.div`
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 1rem;
  bottom: 0;
  border: 1px solid #e5e7eb; /* gray-200 */
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: -1;
`;

const DateInfo = styled.h1`
  text-align: center;
  font-size: 1.25rem; /* text-xl */
  margin: 1rem 0;
`;

const VenueInfo = styled.h2`
  text-align: center;
  font-size: 1.25rem; /* text-xl */
`;

import mainImg from '@/assets/images/main.jpg';

function Home() {
  return (
    <Section>
      <Container>
        <div className="absolute left-1/2 top-16 md:top-32 text-center -translate-x-1/2 w-full z-10">
          <SaveDateLink
            href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20221015T040000Z/20221015T060000Z&location=%EB%AC%B8%EA%B2%BD%EA%B4%80%EA%B4%91%ED%98%B8%ED%85%94,%20%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EB%AC%B8%EA%B2%BD%EC%8B%9C%20%EB%AC%B8%EA%B2%BD%EC%9D%8D%20%EC%83%88%EC%9E%AC2%EA%B8%B8%2032-11&text=%EC%9D%B8%ED%98%B8+%26+%EC%95%84%EB%A6%84+%EA%B2%B0%ED%98%BC%EC%8B%9D"
            title="Save the date for the wedding"
            target="_blank"
            rel="noreferrer">
            Save the date for the wedding
          </SaveDateLink>
          <CoupleName>
            현근 <span className="text-xl">&</span> 은비
          </CoupleName>
        </div>
        <BorderBox />
        <ImageWrapper>
          (
          <img src={mainImg} alt="메인 이미지" className="-z-10" />)
        </ImageWrapper>
        <div className="mx-4 mb-14 mt-12">
          <DateInfo>2025. 5. 10. SAT PM 5:50</DateInfo>
          <VenueInfo>test</VenueInfo>
        </div>
      </Container>
    </Section>
  );
}

export default Home;
