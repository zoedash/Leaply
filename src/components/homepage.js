import "../styles/homepage.scss";
import React, { Component } from 'react';
import { useEffect} from "react-dom"


const GOOGLE_API_KEY = 'AIzaSyCC73qlA2nA5eFLEt8LRj1wFZCsyVfgf_Q';


const lat = 47.918763;
const long = 106.9129151;




function Homepage() {
  const onGoogleMapLoad = (e) => {
    e.preventDefault();
    // let map: google.maps.Map;
    const google = window.google
    console.log(google);
    // const map = new window.google.maps.Map(document.getElementById("map"), {
    //   center: { lat: lat, lng: long },
    //   zoom: 15,
    // });

  };
  // useEffect(() => {
  //   let googleMapScript = document.createElement('script');
  //   googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
  //   googleMapScript.async = true;
  //   window.document.body.appendChild(googleMapScript);
  //   googleMapScript.addEventListener('load', onGoogleMapLoad);
  // }, [])


  return (
<>
    <div id="map" style={{ width: '1000px', height: '1000px' }} ></div>
    <div className="container homepage">
      <div className="inner-container-hp">
        <div className="row">
          <a className="btn-large-hp col white">
            <i className="material-icons flex-2 indigo-text lighten-1">
              layers
            </i>
          </a>
        </div>
        


        <div className="box-hp avatar-hp">
          <div className="">
            <div className="avatar-item-hp">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRYYGRgaGBocHBwcHBohGhgeGhgaGhgcHBocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAP0AxwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABBEAABAwIDBQYFAgQDCAMBAAABAAIRAyEEMUEFElFhcSKBkaGx8AYTMsHRUuEUQmLxI4KSFUNyorLC0uIHM1MW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAgIDAQEBAAAAAAAAAAECERIhAzFBUQQiYRMyFP/aAAwDAQACEQMRAD8ArZTJV7cKdYRWHoic7oxlOys5EMRMcLfJV/wZKdupyvG01sg4if8AhwuFHknIwwK44UIZGxFbKPRVVKUewnAw5VL6KykZxFQpKFWmmxYeCX7SqNpsL3mGtEn8Dmi2ZRBYaOaX4nbuHYYLiSNGAnzy81nNo7SqV3HNlObNBzHFx1Pl6oXEUQIHKT35Kb5PRRcXlmid8UUf/wA6v/J/5Iih8RYZxEuew/1tt4tkBYt1PhKqLihlILhE+nU3NeA5jg5pyIMg+CuGHavmGCxr6Tt+m7dOoza7k4ZFfTPhzaLMSzeb2XtgPbOR0I/pOh/CdS9k3D0WfIB4qTcMOaZjDwvfkp8hcReKIXpYEw+QFB1McFrNiCOpAj+yh/DjRGilyXfwq2SNiBfwvBccKCmIoHipCgVlI2Ir/h4XJoKPFcjkCil7Ivy/KJoPmAe5C1MSAMjPPouFXstImZnwJSUPYy+WFwpBCUcUA6Yucwfyi2YoAw6ADqMuhS0xrR6xsaL15KpxeKjIiINxxEfuFDDVpY4vORz1jpxQrQbRa8TnK5lMaq6lukBzYIOR4qT2hZMzQJVogXCwfxRUdWrtw7Lht3Di4iRPQEHv5LbbYx7KFMvffg3Un7DiVi/hKoatV9R4zcT1JuZ8ckk5VEpxxuQRgfhAkDfe0f0j8/srdqfCDXEubUA5WiwgardUXiAFN7gubNnXivR8ax+wn05gh3RI6rbwRdfZdr4ZjmmWiY4L5vtvZ0EloVIzvsjPjraM4Qmvwvtb+HxDHE9h3Zfw3XEX/wAph3ceKWPBvKqIVbIUff6eWnJeFt0l+DtofMwlMuneaC0niWHdHiIKeU6oPCRMpkwMr+WpNpBcaoDiDAU21ATb3CNgoj8oK5tIL1oVu6lsYg2gFL5QUxZRqVGtEkwiCkVvpgL1BYzGkWbEcfNcnpi2jN4as54LHntAA5ZgznGqa4R43d0m47rdw6pNhY3i+bmx6ZjqckfTrNHcNZ14qlaJvTJVXkkzl74qynULrXz1y8VU54IkungOPOMgpU3bpLpkQLTzB+yAPITij2Tl9Xq6f2Qdd8vA0AvzJi3Re43FNcIEb2cd0T6oSoAwA717Z6wlqkUTCsM97X7rCbkGJgRcnylMcfi2tGhcZjPQE59yQvxNw4GDEZ8nA/8AUVz8eCZDpNrG+QImOhRxsCfgS/F+MLgDeJ3bnhMx3jwVvwJUApEn9TteaR7bxG9bQac5/HomPwvst9TDOex0FtQy2J3m2kLl5OmdnFdo3+B2pSc7c3u1oDr0RW0MaykwveYA8TwAWNdsyt84OD95ggtAYN5kZy4NaAO89EZ8U4Z9SpTpT2cz1hc7R1J6Lv8AbLKhyAHNwnwS3atVhBEDxVe1dmuYGhlWmGid5rmN7t0FhPi6eaW0tjP3N977XhsH7+iZUI7eqM1jGS50aewlz0xxQBJ6oF7VddHJLs3v/wAf4k/KqMn6XtdyAcNP9B8Vsvm7wmb3kd/ovn3wNXDKjmzZ7PNpBHlPitk17g60cPfkqxpojO0xi2S2dcj9lW6RG6bj8fsq6eKi4MGbjMKZdvX8U1bBehpSrS1uUkBEb4Az/ZK8LUa0EPMZxw5IkVhEDxgQkcRkwptRsSYsErx+I3gfADhKk+oZ8MhE9ypxH07xzKaOmLJ2DPggDIZrxV1qZnlFvJcqkbFWAa07xe8NHZznVoB9ExqUqTQ0l/ZcA4WJsRbWyRNIIaDpJPeAL+Hmr9nPBY9kHs71zwc5xEclO2Woavo0IDhWabT2ZkiYsCbmUCzEh7iGb29B+rLwSH5LhnaLHh7spVqjqYDwe0CO+2R49EFJhxRpamHJg/zDPny+6rxIBBnPTLhorqVcndnISb+XX9kJiMUGsggk3/bNMnYslXQpdi90kOy98kNiXMc07p9fVUY15e6wVDWuBEm0z4XuhJ6NFbF+NpkvMHSDPJbb/wCNcVFNzZ/nPmsbtJpDuM27zdHfCGNLKjmjUAx5H7LmnuLO3haUkfW8S8GGzmUl2k8fxAnOwCNosc9gexwD23aDkeRi46jzWJrYvEvxPbbugPaTbRrtDrkVzrZ1SpH0ffbu3Ay4LKfE2KAa4NtYpljMcN3snS6xW2cSXTKMVbNNpRsy7nSfHz9cx4IV7USXX7/uh6uvVdKOBjLYeJ3KjX6Aiek38l9NNSmAN15dMfSOPvJfJsO6J6L6HstpdSbBjsjThMJ490Tn1Y8ZTY4AtrC/KD0IVj6bWzNSPeohIG0AHceOaJcd1hGUgq2P6Qy/B62hIkPa4cQRCrp0RMB7ed7rJDEPY4m8HTT3qjKVVrmgzmYgi88EXFryFSXoe4yqxmbp5NF4XUMRQfZtVotEOsfOyS0GzL5tcAc848vFBNY2XSeME6paNkaLGOpt/wB4Hchc+Xuy5ZmtUIEgjrpouRx/RcvwnimbtxAHa9HED0VFKpu1BNmtZLjYC+QRWJwp/VOfnZJsXvB7XahsEaHdP4lTi9F2FYnaLHOLRvTa94MctVY7FUoAc1xPEggZcSVWalMsBc2JEyY6GJ5gjuVbgwCQSR78VhRg7HmI3QQdd4G3j9yh64L+APAn7/3QRptzYH63A8V46k/9Lu8ER5opiO2Es2WXZBp/4XNN+sn0Vg2W5oksjxt3yqKFN8//AFzHA2R7abiCSx4Eav3h3ErNDJ7MttcZzln4f2S/B4k03te3Q+I1CcbapgboIOfePDPVInyD7gqK8o6XqmfT9l4unXZvtLt7dAhr3NyM33SJ70BjqVRz5La7OZcCI5QsbsTa78O/ebdv8zfuOa2Fb41a9uR8FGUGno6o8qa2GsLKdMgTOZJJJJ6lZLaeI3iYXuN2uXmd6Al76k/SO8poxrbFnyJqkU3Hv3KHqtjxRT6ZAuh6wN1Q52Qovghb7YNfeot5SPIQvnrxda/4SxJ3HNBuD42H7Jk6dk5bQ4qYtzXRfiL6dF6/FOIyOepV1DBgkve+LWE+WSAxlFwc0SAHS5rZyAIF54rotHNiy3EMe7IjmJy1tyUcM2BGoN+Nzx0nioVKT4t4gj8qOFogSXuIPUaxyy5LWBDFtSGkNEnrlnmTmc0GXudYm0cgPJGsIIG6ezx95Id72TuyZ5zB87oWEArU7GMpzK5Tx8CBEaxxnkvEuQaPMXjd47rZgmLTzuT4eKArVH7zm2EkQNBAOnQ+SNbso5b57gFI7HaSJLjGpPNJTLWuhfSO65jgWxeRJh2UjkdU4w+Ka+Ow2R1/8gof7MotBtI1k2VrmMYJa1sAEkHOJ9fqSymo9mjBy6C2tvZjfH/2RLGOA+mmOt/MFBU9oxAazs2mLETOnDLxRWB2ix4EG8/TaRGdh3eKZTi/JnBrtBFzm5v+X7XQ2Kg2k+CIdXG9AJ8lVXc6JmyKkhcdmP28w9mOfkeCQubLsveq0+33GIAzd9x4arOtYS7lA65clJNWzof+UV1KeXMJ38NYVrw9hFwQR32+yCpYR7zDWknl7stj8O/DdSn23CN4RHgVpNUGEXdiLE7HLTko09nHhC2eJwuhCG/g+SnkVcDIbQwwa1Kqwztp6eytXtvCm3UeqR0aQL4Izdlyz99EYsWURPWpEESnXwtVLXPE6A25iCp4jCgjqAR6+kpZh3mlUkZCJ996du+iOPs21dz2N3rOAFjN+kSLJPjsLXe8vfAkWk3DdAB4+KZ7tB7AC8gkSDMSdDwUKlKiW7oeZbA3vengrRdo52qEmHbULobvdnMt+/BNX13fRF85JBsMxyVtCkD2Gv3b6NMmdZJ5K19D5U7z99xAvGQGlgUHKnQ0Y2rKH4wsiHbozgCe6RqvXva8BxiYEidddFD+F32ue8nda07gm5dYDIC0n3qqw9ctBBz4c5FkFIMoWtDdjOyXxPahuoPHPPXwXKujvfKEkQBI67xaP+XeXqRyKpUqoc4pokxa0/lLqmMa0BwMzofFX4iuCyeMeZCz2NpSd4C7Sctbl3/cuTi55VTOrk+PG8kO6bjU7ckSQALxIGcdZ81U5jzYEZxc++ahg374BYcsx+k6yrmZZmZJvopSk7tjUkqRU1zml9xBie5sTpyWco4pzZc2d4P3xHSE8xNB7pg5yMjwz80HTwu5vNmRxNs9PXxVISVCSgwdu0XOexxJl0CZt0jyV1DaT6LgAS5pzbpzI4FCYeluukjsgGHaAn2VTicRvvsIb5u4W+yslbpdE2qWwvaONNQkNyOuXBNfh7YDsQ67iGC5OpnKOVjdLNh4Q1am7ExoNftC+w7H2W2kwAC9pPQR4Iv6qkGKvbB9m7DpU2wxgHqepTZ1MRHBTLV6FMqL6uADnTC8/wBntCZEIauZCxjF/FWGAFjB5cJuVk8HTgxmSbcpAbp1K23xMOzzyWb2NQ3nggXF4i8mwPgCmiCfR1amC7LS3dcLO4zD2PMk90w37nuW6Zsdxu4xIiBcj9+cqNbYFMD6TwuWjpmE6ZJrRjdivY7sPJEXECbTkJ93Ww2dhqTpESQNUgxmyGMO8wEdNPAIjZW22UzD5IiJEW6t/fuVU6RzONuzR18CyZ3Wg8d26XYrCMNm7s3mZnI3IBTejtBhaCAXMOUFsH9lMOpuIHywSbC9u8pG3ZRUkIQwMa7eIyJOosBEc5Cy+Jw7nOLmgmZ87Qt7jRTb2Cwg9ZBngl76TAYgggcuFtM1lKuzdiqvUDWtAjda1pPHe7QHdDlyLrYQFoF+MxnpfjZcltB2DmC3cE70acsr93mvHYUxEX87dyKwNQNbkJIv6CfAKba0kwLcbcV5eTTpHptihmFqMeXNJExMT3Jm3aLcqjd0xeciYvB071e5hn2fshsRgQ6+fvxVFO+xMV7LnURyg5RkQvH4dpEkD2deKCYx7TYkATY3HhxV1fEEMJcRrPKBJ9EafgCryJNu4i/ywbDtOjn9I+/gl43WiM3nwEjXl69EN81z3F5zc+fP7AIzB0w99sgLk/zE2HvovRhHGKRwzllKzUfAT2NrAO1EA8b2HXPyX1YL4xhiG7psLC/GTMXIk3FgPwdZsr4pewBtQbwAgXvYH+aIItnAsEslbKRkqo27ypMaluA2ox+sOnI5+GaaAg5FIyiOcEJXMBFFZ7bO02ssCCfef4zKCVmbrYs2yA6xJF7RmeiFZi6dFsGBrAzPU6+8kp2jtYT9VzN7SeQ/SPHmkba7qjy1gJda5+kc5lWjGkRlNtmoxPxG6IaA0c5n/SLnvhJMVt97v94O5n5lQZsuT23FwFzoMpy/KrexsQG2n/tJ+4TJISUmL622HGe24EcQL+AQlfHl1zfnEOCvxNAeI+0/slD5aSNOCLFQ22btZ9F0tdLTmMwee6bSt1s34lplsPaAYsW/SeREy3zXy/LodUds2tfdylSnFraKRp6Z9boYhr2uJyEXBBvFwD4ZcQpv2e0js3tr046rC4LFuYRPaHAkx/davAbV37tMOtLTmIJJ7pOfopOcX2bBx6BMXhHtcSJA8u5cm1bGFw7QJ5ANPTVcjkajE7NxMNG9AJzkQLnLhwyTfCU5MyFmK2JG6QTJNgBkPuSmOHrv3R2jIEGDqLHzBXPy8VbOrj5b0OfmPE2NzMcAhK2MPPoR75KhmNe20z4Kx+0XEXA996kolCupiSRfvCU7axXZgfzdkAeflbvTKrtAgWiImTJjncrOYnFOqP3jkJDbd5PvgFfghcrfgjyzUVSKabE02UAGuP8AxeEAfk9yAewgCMzM96J2c8bjhzjz/dd5xsO+dcCJJOkjMEm4vYwMxkEVhahcZJlsDwDb9rqALzYCOCVU6kuPQn/Vf1hWYWoO4D1F/ug0FSNEx4BieBIjMm8DQD6gTbMkaK9mPeyIe5ulj/TyJi8GIy3u5Q7FgNMEi8+Ig+pQn8VvCJ1k52BLp98UmJVTHtTbNUz/AIr4mfqJGVtL9Iv0zR7S2kTIkk8J8S46lDYnFHS3Dlz5lKqj+GXqnSonKTZMuL3AZuJA5DQQtVsmkKbXAaXJ4k9lvnfuSDZoa2HHNsnvIgeFz3Jn/FbrGjj2jzizR6ogD8S6f8NsS67uTRkFbSwIc0HiXOlxIsWiCGtvwzKowGGJBqON3T0M2A6fsndYhsNECGySdAI/DUrYUrM9tDDMbIaTJ3hO4WiARI3t48Bpos1tKiGukcfAZEdxT/am0RuwMjJme07M24NE96zrnF0k5zPjY+gRQKF5bxUqNUtcDwMqTxB9+CqWqzGswx3mgjrbTuCJo1SDnccEn2N2m/VEewm1Ok5zheYk5EWAk5jgCuKcabR0J2rHlLabQ3/EcR/VEg31HFeKqvhGlg3QHZTM+IN+PouTKGgWZ5rGMaXMYd+LFzpIJtLRGa0Gz9iwxoe4zFxwm8d0qmntbDCD8ozaOxlGuSuPxFTj6H+BTSTl2jRePTCRsdv6io1Nj0gCXOIGuXXuQv8A/SM/S/wSnbe3RVYabA4ExPSZIQjxb6C+V12BbRrse7cozuDNx1jhwHryUaWEiObYHfE/dXYDCAAF1+WneNT1hMmMb9TrnnaByA/K6ElFUiNuTtiTGsOfBU4R8Bw5g/b8J1iqAMkETwy80hqsLSRl18kyBKJKi+A48o8IKnSq396D+6HY63f+PyobyYQMOJmwnMAceA9VeXxDZsM+Z4/YIDDXJJ0y6n35q15mzf780KMe1nyeXkAgnvl3IKdd8WHeePTkqabZKxg0PsBOd/sETQfvvDZgWHTT0lLnvifdlbgXQd7X8arMxs2YtjN2RYDeDR07InSwmdO9L8VtEu3nvNzIa1uXXoPuEDiMZrqAPECPugqW8TLjPuw9Uo8blo8c8vueY6DIBRLOyTyumNLCw2TZBYl8S0ZJVIu4YrYsqNkqqFc+6qcqHM+x58K0g97mb0Et3hzjMeB8lqzs0sIeHSdLZHRYLZWL+VVY/wDS4TzGR8it0/b9JwIIeJ4Dz9FCcPtZWMtUV16NJ3aBqUicw2C0noYhch62Ow51fpkLrlvsH6gDcCzh5n8rw4Rg0PifyiWldiXBjC4nISjYtCnG7jbC7joC78qvCUou4/n34oZjySSczn+EywbgztOz05dAMyqdITsY4YhsANg6zbxBcD5IupigM4P+oJQ/aBFx2Z1daf8AK258V1PaB/Wx2t9O66HY60MatZrxkCLZEfc5pPtWkAAWzbMHMft+FZiMa0n6pI4WBPcch1VNd5Iyt32B48pRQJPQui3eq3OurHGwHvNVNbdOTCaLbWy4/lQqVokDvKqqVTlH48FUTKxjxxV1KwniqmtUnPWMeOdKvwzfIE+apEIhhhp5nyCxiwuLiOZlOcJQDAC4g/n7pPhQZ3vYTmm8PsJJ0AOalOzp4EvITWa1/sj9klx1EsvEjj+Uyq4d7czu9XfaJQ1apY3Lu6B+6WJTkdiN7pOSi8K17e1Oii5qsckuweFp8Dgw9jXWuL5566rNuWp+GKwNMs1a7ydcfdLLoMSw7M5ev/kuTR3v3K5TyY+KF4b5pNtus/e3D9Jgjnxnv+yfZaLNbbqTUj9LQO83PkQtFbNLoGpPi/gj8FhX1nADW08IuQ3kBmfuUrLoErW7GogMY3V3Z7gd5573SP8AKEeWeMbK/F4VyTp9BdDY1CmAdzfdkL2cdTMmw5GL5nQx+FIgHdbvZMYynJ6zfyJV1TFEWYBvFoDbfSC4tZHD6XnzUHxTkB0v3d6o833G/k5AcSO7hyk3s9hccIrSQkxexX1HOLWsY1sy4mxj6smgGMpAztKUUNk1nHdYCSRZt5I4xFhzdA71psVjd0Q7INL3N4BshjDp9Q7Qy0yAWk+FKYDN9/1v7TzxJyHQCwXTGUkcHyOOF/rMU34Gxsb24zoXifDLzSrHbGxNMkvpPAGsbw6y2YX3N9YREqv5QKp/VnL/AAR+fX5KmF9u2h8OYeqSX0WEn+YDdd/qbBWL+IPgtrBvYcn/AIHGfB35TR5U+xJcLW0YQuXoRGJwj6bt17HMdwcInmOI5hUgBVsjREmbK+obxwt771WwCRpdWtP6c1gB+zmgHtmBw1P4TM48Ns0Fo4gXPVxWeY/dNyZ5Il9UmIbPOUko7LQm0qGD8U136u6J/KDqMObXP6H8qrff+kR1KpfWPAjofyso0Zyb7IVR3qqVN7uoUZRRN7PAUz+HaxbVDdHAg+o8x5pYp4Spuva7gZ8DIQl0Zdm7OS9UyPcrlAqBvcNFjsU+XvP9R8iffctL/FGLgGOR/KzGO+snKb+KpDsSfRS7JaLZuMO6HTlHhvD/ANlm3uVuExO7Y5Hy5ozjkinx+b+crNRS2oQ2s4ntkgNt9PZLQRwDQTHOETiMW1jnMJ7O98yP17ji1rDyt6rOvqySeIvz5qD8QSQSbiIPRR/mdr+RSGeJxBdTJJklpDjxPzN8/wDUnWyPiBrGQZDrekLJse5x3WgkuMQBMnSITij8M1iQHgMnSe14CwTqKSpkOTkcpJo2eA23v6p/hMVOq+eYnAPwxAmW8f09eSPwO2INykcfQ0ZXpn0NtVsXS3GYpjD2og6pa3aYLe5UtqUcSHMfqIInLpwSj0hljNl0q1MhrWPaf5HXE8WnNh5hfNdrfD0OIoU3tIcA5r3sAHANLiCfOyb4pmK2e8FrnPok2J05HgfIpvgNosxMuDgHxBB9HN1BTKUo9CYwk6kYyj8J1SCXuawjRweY4EwLCdbhFYP4TcDNV43OLO0J0mR2fArS4uk5naZIDZD6Zu0Aj6mcAROUSJ4EKFN4ZDx9BGYOU6OOnI9xtkj55nVD4XC1fYqqfCdK3aqEf5HNPhB8J6JdiPhlwk03m2guR1bZ3gCtU+oGTIlsXLRp/WyIIyuMpyyJWYmtN29tuhvvN6HUcilXNL2U/wCTiqqMZi8M+m7tiZyOn9+RVW9P0kTwWhxrd7M7w56dQs/WogOIHcftzXVDkyWzzuf4643a2isvJz9FFolWOvnn6ocm6ojlkqLHCNVFn1Bezb3ZQ1CIDfYfEA02nXdbnPBch8G8/LZB/kboeA5rlCiuxTUq24JLjXgusZVmOfJtlyQhaqRj5NySvRErg1XU6NxwRXyxmE1kqA2SMlIViiHsH9kNC1Gto03wrivlio8NBfZoOomZjhNvBazZm8GHE13ZjsN4D9XfosPsquxjHtP1S0xxAmb+81p6OMOJrAERSpgO3dCBAa3vMCOEqU1s6eOVrY8xjGubL7l2iw2Pomm6W/TOXDotNtfFhgO8e2dJ+nvWRxm0d60k9LoRDNoa4TbBaAW9puot6FOz8jEND6b9yq0ZjO38rhqOS+fNqPad5gcD69VezGOB3gHNdxaUZQ9AjyvybNm3C8fJrgE5f0uHKf7pNtTZzqLvmU3kN/lcNDI7Lvd0qqY9zxD2E89UVQ229rSx7C9hBF7Ezx4oY+hlyLpjnZ+2Xuc1tUDOC+T2t4QGx1v/AJeaB2jinMexrHlpaDkdC4xI10SIYk2BOUQuFYlxcTM5kpHxbstH5CUcV7H9PHvMFz4g2IAEeAhX1MU03aN0/wAwH0n+po05hZyrWsGzrKk3EOGqV8ZePyUtMLqY0hxa5oscxNxp1S/EOBJtE+S6s/ecDyVLzdWjGjk5eRy8+SD0O/NXvd5oZ7rqqOSbJSvG5qKk1yIqNhg6n+G3oFyFwTxuN6fcrlzO7OtVQjxeaobdWF0mV5bl7710JUjkk7ZNroXNqHqol6jdExY58rmsi56+GS9pDXP7L0kudZYBEv3XAjTz4haL4f2qGlwA/lnn2Jj18gkzcOBzPT0uraUsdvC9iCOREH3ySyjaGjLFnm0sa+pU7VxM9f7fdUmudAFTVrkzYfVPRd8y0wtiNls9dXd7H7qPzncfReGqOHkF46uOHotX4Zv9JCq7iV2+7iVH5/I+K4ViT+6wtnrg7mvADwK51Qj2VV80rKzNhDXOC7fOvqh/mFe06hmJWxNkX/M1hUvqcVGq4qCKiZyZO5UQ1WUxZcW3KIOyorwKTgvIWMPMJU7AC8Q+GfDbrlOiyloAYCvJUojIrwhUIHp5LwC91Nq5v3WMW0mF/ZaLan8BMaGHa3+484XuFogNV27GvhZCwnoaAJt4/lD13hRqPPE+JQpdoiAqqAKAbZWVVF5sO5BhRSBdRe1SdmvCFkZngC8XLgiYuqtVDQrazyqiUEZnpC9otuuK5huszHVRmqwFeR6KACyMybTYKLnXUmhc0ImRUSuaVJ4gqKxgqm+wXKFHJchQx//Z"
                alt=""
              />
            </div>
            <div className="pointer-hp"></div>
          </div>
        </div>

        <div className="flex-1">
          <a className="btn-large-hp white col">
            <i className="material-icons flex-2 indigo-text lighten-1">
              message
            </i>
          </a>
          <a className="btn-large-hp white col">
            <i className="material-icons flex-2 bold indigo-text lighten-1">
              gps_not_fixed
            </i>
          </a>
          <a className="btn-large-hp white col">
            <i className="material-icons flex-2 indigo-text lighten-1">
              account_circle
            </i>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Homepage;
