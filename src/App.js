import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";

import "./App.css";

const projects = [
  {
    title: "Denoising-대한",
    imageUrl: "/ldct.png", // 실제 프로젝트 이미지 경로로 변경
    description:
      "ldct 이미지와 ndct 이미지를 이용하여 denoising을 수행하는 CV 프로젝트입니다",
    more_description: (
      <span>
        백종덕 교수님 의료영상 처리 랩에서 진행한 프로젝트로,{" "}
        <b>
          정상 방사능을 투여한 CT 이미지와 비교하여 1/4 방사능을 투여한 이미지를
          디노이징
        </b>{" "}
        하는 CV 프로젝트입니다. 기본적으로 <b>red cnn 모델과 vgg loss</b>를
        사용하였으며 <b>U-net, U-former에 기반한 다양한 모델</b>을 사용할
        예정이며 <b>CNCL 모델</b> 위주로 진행할 예정입니다. 7월 중순 각 모델들
        간 testset 점수 발표 예정입니다.
      </span>
    ),
  },
  {
    title: "Kini project-대한",
    imageUrl: "/kini.png", // 실제 프로젝트 이미지 경로로 변경
    description:
      "교내 창의플랫폼 프로젝트로 프론트 엔드 리더이자 팀 리더로 참여하였습니다",
    more_description: (
      <span>
        배달소외 지역에 계신 분들을 위해 <b>공동배달 기능</b>을 제공하는 웹을
        제작하였고 추후 PWA를 이용하여 앱으로까지 제작하여 배포 진행하였습니다.
        자세한 사항은{" "}
        <a
          href="https://jamintachi.tistory.com/1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          여기를 클릭
        </a>{" "}
        에 정리되어 있습니다.
      </span>
    ),
  },
  {
    title: "Nlp 프로젝트-대한",
    imageUrl: "/idrsoft.png", // 실제 프로젝트 이미지 경로로 변경
    description:
      "Mistral 7B 모델을 이용하여 글에서 키워드, 요약 추출 및 비슷한 문서 추천 기능을 구현한 nlp 프로젝트입니다.",
    more_description: (
      <span>
        IDR soft 사의 외주를 받아 제작한 프로젝트로, version 2에서는{" "}
        <b>KE-T5</b> 모델을 사용한 문서요약, <b>XLM BERT</b> 모델을 사용한
        키워드 추출, <b>BERT</b>를 사용한 고유명사 추출, <b>KoBigBird</b>를
        사용한 문서 임베딩 및 유사 문서 추천 시스템을 제작하였습니다. <br />{" "}
        version 3에서는 <b>Mistral 7B</b> 모델을 사용한 압도적인 성능, 그리고
        적은 리소스를 사용한 키워드 추출을 선보였습니다.
        <br />
        저는 version 2에서는 <b>도커 이미지 빌드 및 api 제작 담당</b>, 버전
        3에서는
        <b>Mistral 7b 모델 리서치</b>부터 <b> 프롬프트 엔지니어링</b>과{" "}
        <b>도커 이미지 빌드 및 api 제작</b>까지 전 과정을 직접 담당했습니다.
      </span>
    ),
  },
  {
    title: "패런틀라이즈-승민",
    imageUrl: "/패런틀라이즈.png",
    description:
      "생성형 AI의 감정 분석 모델을 활용한 맞춤형 육아 솔루션을 제공해주는 프로젝트입니다.",
    more_description: (
      <span>
        생성형 AI 중에서도 <b>STT와 감정 분석 모델</b>을 활용하여 맞춤형 육아
        솔루션을 제공해주는 서비스 입니다. 부모가 자녀와의 대화 내용을 음성으로
        녹음하여 제공하면 AI가 논문에 근거한 전문적인 솔루션을 제공해주는
        서비스입니다. AI의 할루시네이션을 해결하기 위해 <b>RAG 및 파인튜닝</b>을
        사용하거나 <b>자체 모델</b>을 개발할 예정입니다.
        <br />
        현재 MVP 버전을 배포하여 <b>200명의 유저</b>에게 피드백을 받았으며 각종
        교내 창업 경진 대회 및 대외 창업 경진 대회에서 우수한 실적을 내며{" "}
        <b>800만원 가량의 상금</b>을 수상하였고, 현재 VC들과의 컨택도
        진행중입니다. <br />
        베타 버전 출시를 위해 개발하는 과정에 있으며 올해 안에 정식서비스 출시를
        목표로 하고 있습니다.
      </span>
    ),
  },
  {
    title: "음식 메뉴 추천 서비스-승민",
    imageUrl: "/메뉴추천.png",
    description:
      "생성형 AI와 임베딩 벡터를 이용한 음식 메뉴 추천 서비스를 제공해주는 프로젝트입니다.",
    more_description: (
      <span>
        음식 메뉴를 정하는 과정에 있어서 <b>"~가 먹고싶어"</b> 보다{" "}
        <b>"~만 아니면 돼"</b>라고 말하는 사람들이 더 많다는 점에서 착안하여{" "}
        <b>생성형 AI</b>와 <b>임베딩 벡터</b>를 활용하여 음식 메뉴 추천 서비스를
        제공해주는 프로젝트를 진행하였습니다.
        <br /> <b>Open AI의 api</b>를 이용하여 음식을 11가지 특징(한식, 중식,
        기름진 정도, 칼로리, 맵기 등)으로 평가하여 <b>11개의 binary vector</b>로
        표현한 다음
        <b>cosine distance</b>가 가장 먼 쪽에 있는 음식들을 추천해주도록{" "}
        <b>프롬프팅</b> 하는 작업을 담당했습니다.
      </span>
    ),
  },
  {
    title: "AI 자동 뉴스 요약 티끌-지수",
    imageUrl: "/태글.png",
    description:
      "Open Ai의 GPT를 이용하여 초개인화된 뉴스 요약 서비스를 제공해주는 프로젝트입니다.",
    more_description: (
      <span>
        현대사회에서 뉴스를 보는 것은 필수적인 일이지만, 시간이 없는 현대인들을
        위해 초개인화된 뉴스 요약 서비스를 제공해주는 프로젝트입니다.
        <br /> <b>OpenAI API</b>를 활용해서주어진 키워드에 대한{" "}
        <b>뉴스 기사를 검색</b>하고,{" "}
        <b>정해진 형식으로 요약 제공하는 챗봇 MVP</b>를 개발중에 있습니다. UI는
        카카오톡의 오픈 빌더를 활용하여 플러스 친구 프로필과 챗봇을 결합하고,
        아카이빙을 비롯한 추가 서비스는 웹앱 형식으로 제공할 예정입니다.
      </span>
    ),
  },
  {
    title: "DataCamp 강의 추천 서비스-지수",
    imageUrl: "/데이타캠프.png",
    description:
      "Open Ai의 GPT를 이용하여 초개인화된 뉴스 요약 서비스를 제공해주는 프로젝트입니다.",
    more_description: (
      <span>
        외국의 <b>Datacamp 사이트</b>에는 양질의 강의들이 존재하지만
        한국인들에게는 어떤 키워드로 검색해야할지 막막하거나, 원하는 강의를 찾기
        어려운 경험이 있었기에 데이터캠프의 강의를 추천해주는 서비스를
        구현하였습니다. 먼저 Datacamp의 강의들을 <b>크롤링</b>하여 강의의 특징을
        추출하고, 난이도, 소요시간, 영상 개수, 과제 개수 등을 <b>DB에 저장</b>
        하고, 이를 <b>임베딩하여 벡터 서치</b>로 강의를 추천하였습니다. <br />
        이에 앞서, 사용자의 선호하는 강의스타일을 파악하기 위해 mbti의 형식과
        유사하게 사용자를 분석하는 설문을 먼저 진행하여 <b>초개인화된</b>{" "}
        서비스를 제공하는 것에 중점을 두었습니다.
      </span>
    ),
  },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, right: "-20px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev `}
      style={{ ...style, left: "-20px" }}
      onClick={onClick}
    />
  );
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // sm size
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#1100ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            {/* Yonsei University Logo and Team Name */}
            <div className="flex justify-center items-center mb-10">
              <img
                className="h-20 w-auto mb-4 sm:mb-0 sm:mr-4"
                src="/yonsei2.png"
                alt="Yonsei University Logo"
                style={{ background: "none" }}
              />
              <h2 className="text-2xl font-semibold text-gray-500 text-center">
                Yonsei <br />
                Aikaraka Lab
              </h2>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              인공지능이 바꿀 세상을
              <span className="block mt-4">직접 만들어갑니다. </span>
            </h1>
            <p className="mt-20 text-lg leading-8 text-gray-600">
              AI가 인류의 혁신기술이 될 것이라 확신합니다.
              <span className="block mt-1">
                저희 팀은 이러한 흐름에 함께 하여 다양한 AI 프로젝트를
                진행합니다.
              </span>
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffffff] to-[#1100ff] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Blog Section */}
      <section className="mt-8 bg-gray-200 py-8 mx-auto xl:lg-w-80">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">포트폴리오</h2>
          <div className="relative">
            <Slider {...settings}>
              {projects.map((project) => (
                <div key={project.title} className="p-4">
                  <div
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <img
                      className="h-48 w-full rounded-lg object-cover mb-4"
                      src={project.imageUrl}
                      alt={project.title}
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            className="fixed inset-0 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75"
          >
            {selectedProject && (
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg max-h-full overflow-y-auto mx-auto sm:max-h-3/4">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <img
                  className="h-96 w-full object-cover mb-4"
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                />
                <p className="text-gray-700">
                  {selectedProject.more_description}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </Modal>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-8 bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">팀원 소개</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <img
                className="h-48 w-full rounded-lg object-cover mx-auto mb-4"
                src={"/임대한.jpg"}
                alt="임대한"
              />
              <h3 className="text-lg font-semibold mt-2">임대한</h3>
              <p className="mt-2 text-gray-600">
                의료영상 처리 백종덕 교수님 랩실에서 학부생 인턴중. NLP에도
                관심이 많아 서울시청 챗봇 외주 제작에 참여. 여러 대회에
                프론트엔드 개발자로 참여하였으며, 백엔드에도 관심이 많음. 항상
                배움에 목말라 있는 개발자.
              </p>
              <p className="mt-2 text-gray-600">AI engineer, Frontend</p>
              <p className="mt-2 text-gray-400">limdehan@gmail.com</p>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <img
                className="h-48 w-full rounded-lg object-cover mx-auto mb-4"
                src={"/유승민.jpg"}
                alt="유승민"
              />
              <h3 className="text-lg font-semibold mt-2">유승민</h3>
              <p className="mt-2 text-gray-600">
                AI 창업동아리를 통해 gen AI를 사용한 프로덕트를 만들고, 다양한
                공모전에 참여하여 수상함. 비즈니스 모델 구상과 고도화에 관심이
                많아 다양한 프로젝트에서 PM을 맡아왔음. 이러한 비즈니스적인 측면
                뿐 아니라 기술적 원리를 깊게 파고 들 수 있는 개발자.
              </p>
              <p className="mt-2 text-gray-600">AI engineer, PM</p>
              <p className="mt-2 text-gray-400">w3lcome3003@yonsei.ac.kr</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <img
                className="h-48 w-full rounded-lg object-cover mx-auto mb-4"
                src={"/강지수.jpg"}
                alt="강지수"
              />
              <h3 className="text-lg font-semibold mt-2">강지수</h3>
              <p className="mt-2 text-gray-600">
                AI 창업동아리를 통해 gen AI를 사용한 프로덕트를 만들고, 다양한
                공모전에 참여하여 수상함. 기술적인 측면에 관심이 많아 데이터
                분석 알고리즘, 프롬프트 엔지니어링, 딥러닝 등 다양한 분야에 대한
                지식을 갖추고 있음. 최대한 많은 경험을 하고 싶어하는 개발자.
              </p>
              <p className="mt-2 text-gray-600">AI engineer, PM</p>
              <p className="mt-2 text-gray-400">jisue0224@yonsei.ac.kr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
