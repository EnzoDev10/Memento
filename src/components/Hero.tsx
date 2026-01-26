import tulip from "@/assets/Icons/tulip.svg";
import skull from "@/assets/Icons/skull.svg";
import hourglass from "@/assets/Icons/hourglass.svg";

import styled from "styled-components";

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;

    header {
        text-align: center;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

const IconsContainer = styled.article`
    display: flex;
    justify-content: center;
    gap: 10vw;

    img {
        height: 20vw;
        max-height: 200px;
        min-height: 85px;
    }
`;

export const Hero = () => {
    return (
        <HeroContainer>
            <header>
                <h1>Memento Mori</h1>
                <p>
                    You could leave life right now. Let that determine what you
                    do, say and think.
                </p>
            </header>
            <IconsContainer>
                <img src={tulip} alt='image of a tulip in a glass vase' />
                <img src={skull} alt='image of a skull' />
                <img src={hourglass} alt='image of a hourglass' />
            </IconsContainer>
        </HeroContainer>
    );
};
