import React from "react";

const About = () => {
  return (
    <div className="side">
      <div className="side-header">
        <b>Shared notes - сервис для обмена заметками. Создайте заметку, отправте ссылку вашему другу. После просмотра заметка будет удалена(или по истечению 15 минут с момента создания).</b>
      </div>
      <div className="wrapper">
        Это приложение - курсовая работа по курсу Александра Лущенко "ReactJS", хочу поблагодарить его за полученные бесценные знания, с помощью которых, можно реализовать такие крутые штуки. <br /> <br />
        <br />
        Ссылка на курс: <a href="https://itgid.info/course/reactjs">https://itgid.info/course/reactjs/</a>
        <br />
        Youtube канал Александра: <a href="https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg">https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg</a>
      </div>
    </div>
  );
};

export default About;
