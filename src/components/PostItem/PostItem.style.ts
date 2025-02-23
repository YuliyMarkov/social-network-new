import styled, { css } from "styled-components";

interface IStyledPostProps {
    $isLiked?: boolean;
    $isMarked?: boolean;
}

export const StyledPost = styled.div<IStyledPostProps>`
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    margin-bottom: 20px;
    position: relative;

    ${(props) =>
        props.$isLiked &&
        css`
            .icon-wrapper {
                .icon-like {
                    fill: ${props=>props.theme.colors.red};
                    stroke: 0;
                    stroke-width: 0;
                }

                .likes-count {
                    color: ${props=>props.theme.colors.red};
                }
            }
        `}

    ${(props) =>
        props.$isMarked &&
        css`
            .icon-wrapper {
                .icon-mark {
                    fill: ${props=>props.theme.colors.primeColor};
                    stroke: 0;
                    stroke-width: 0;
                }
            }
        `}
`;
