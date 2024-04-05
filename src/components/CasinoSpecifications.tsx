import { CasinoReviewTitle } from "./CasinoAdvantageList.tsx";
import { Line } from "rc-progress";
import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { CasinoInfoType } from "../api/dreamersApi.ts";
import {
    CasinoReviewSpecificationItemTitleWrapper,
    CasinoReviewSpecificationsWrapper,
    CasinoReviewSpecificationTitleWrapper
} from "../layout/pages/review/CasinoReview.tsx";

export const CasinoSpecifications: FC<{ casinoInfo: CasinoInfoType }> = ({ casinoInfo }) => {
    const specification = casinoInfo.specifications;
    const initialSpecification = specification.map(i => ({ ...i, score: 0 }));
    const [specificationDynamic, setDynamicSpecification] = useState(initialSpecification);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDynamicSpecification(prevSpec => {
                return prevSpec.map((s, i) => {
                    return (s.score + 1 <= specification[i].score) ? { ...s, score: s.score + 1 } : s;
                });
            });
        }, 150);

        return () => clearInterval(intervalId);
    }, [specification]);

    return (
        <CasinoReviewSpecificationsWrapper>
            <CasinoReviewSpecificationTitleWrapper>
                <CasinoReviewTitle>Specifications</CasinoReviewTitle>
                <CasinoReviewSpecificationMark>{casinoInfo?.rating}/10</CasinoReviewSpecificationMark>
            </CasinoReviewSpecificationTitleWrapper>
            <CasinoReviewSpecificationItemsWrapper>
                {specificationDynamic.map(specification =>
                    <CasinoReviewSpecificationItemWrapper key={specification.name}>
                        <CasinoReviewSpecificationItemTitleWrapper>
                            <h4>{specification.name}</h4>
                            <span>{specification.score}/10</span>
                        </CasinoReviewSpecificationItemTitleWrapper>
                        <Line percent={Math.round(specification.score * 10)} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                              trailWidth={2} />
                    </CasinoReviewSpecificationItemWrapper>
                )}
            </CasinoReviewSpecificationItemsWrapper>
        </CasinoReviewSpecificationsWrapper>
    );
};

const CasinoReviewSpecificationItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const CasinoReviewSpecificationMark = styled(CasinoReviewTitle)`
  color: #37BC5C;
`;

const CasinoReviewSpecificationItemWrapper = styled(CasinoReviewSpecificationItemsWrapper)`
  gap: 5px;
`;