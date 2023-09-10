import { YoutubeLogo } from "@phosphor-icons/react";
import { Avatar, Wrapper, LeftTopContainer, LeftTopContent, LeftBottomConainter, LeftBottomContent, GitHubBtn, LinkedinBtn, YoutubeBtn, CenterContainer, CenterContent, Dot, LittleDot, RightContainer, RightContent } from "./styles";
import { GitHubLogoIcon, LinkedInLogoIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

// const navigation: string[] = [
//   '.dev',
//   '0000',
//   '01001',
//   '01010',
//   '10001',
//   '10110',
//   '00101'
// ]

export function Invite() {
  return <>
    <Wrapper>
      <LeftTopContainer>
        <LeftTopContent>

          <Avatar src="https://github.com/anotherjemluz.png" alt="Foto de jemima" />
          <h3>Jemima Luz</h3>

        </LeftTopContent>
      </LeftTopContainer>

      <LeftBottomConainter>
        <LeftBottomContent>

          <GitHubBtn>
            <GitHubLogoIcon />
          </GitHubBtn>

          <LinkedinBtn>
            <LinkedInLogoIcon />
          </LinkedinBtn>

          <YoutubeBtn>
            <YoutubeLogo size={28} weight="fill" />
          </YoutubeBtn>

        </LeftBottomContent>
      </LeftBottomConainter>

      <CenterContainer>
        <CenterContent>

          <a href="" className="active"><Dot><LittleDot></LittleDot></Dot>.dev</a>
          <a href="">0<strong>0</strong>00</a>
          <a href="">0<strong>1</strong>00<strong>1</strong></a>
          <a href="">010<strong>1</strong>0</a>
          <a href="">1<strong>0</strong>001</a>
          <a href=""><strong>1</strong>011<strong>0</strong></a>
          <a href="">00<strong>1</strong>01</a>

        </CenterContent>
      </CenterContainer>

      <RightContainer>
        <RightContent>

          <h1>Entre <span className="blue">dramas</span> e <span className="red">programas</span>, <br />qual será seu próximo passo?</h1>

          <div>
            <p>Seja notificado sobre novas aulas e materiais.</p>

            <div>

              <input type="text" name="email" placeholder="Seu melhor e-mail ;)" />
              <button type="submit">
                <PaperPlaneIcon />
              </button>

            </div>
          </div>

        </RightContent>
      </RightContainer>
    </Wrapper>
  </>
}