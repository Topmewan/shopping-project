import React from "react";
import { Typography } from "../../../components";

import styles from "./Important.module.scss";

const Important = () => {
  return (
    <section className={styles.important}>
      <div className={styles.container}>
        <Typography variant="subtitle">Что для нас важно</Typography>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.top}>
              <svg
                width="61"
                height="63"
                viewBox="0 0 61 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.6611 41.349L50.7656 37.1565C51.7557 33.5158 51.7501 29.6761 50.7493 26.0383L56.6643 21.8978L51.9421 13.7273L45.3641 16.7368C42.7053 14.0589 39.3762 12.144 35.7246 11.1923L35.0973 4.00004H25.6528L25.0256 11.1923C21.3747 12.1453 18.0467 14.0613 15.3893 16.74L8.80807 13.7305L4.08907 21.901L10.0041 26.0415C9.00281 29.678 8.99608 33.5166 9.98457 37.1565L4.08907 41.349L8.80807 49.4805L15.3893 46.4678C18.0471 49.1453 21.375 51.0602 25.0256 52.0123L25.6528 59.2045H35.0973L35.7246 52.0123C39.3751 51.06 42.703 49.1452 45.3608 46.4678L51.9421 49.4805L56.6643 41.3523L56.6611 41.349ZM36.8913 0.701295C37.3097 0.700852 37.712 0.861758 38.0147 1.15052C38.3174 1.43928 38.4971 1.83365 38.5163 2.25154L39.0948 8.8653C41.4973 9.78084 43.7386 11.0732 45.7346 12.6938L51.7471 9.88904C52.1184 9.69797 52.5491 9.65721 52.9497 9.77522C53.3503 9.89322 53.6901 10.1609 53.8986 10.5228L60.4148 21.8003C60.6242 22.1618 60.6863 22.59 60.5883 22.9961C60.4902 23.4022 60.2396 23.7549 59.8883 23.981L54.4478 27.79C54.8638 30.3835 54.8508 32.9673 54.4511 35.4568L59.8883 39.2593C60.2404 39.4855 60.4917 39.8388 60.5898 40.2457C60.6878 40.6525 60.6252 41.0815 60.4148 41.4433L53.8986 52.6785C53.6901 53.0404 53.3503 53.3081 52.9497 53.4261C52.5491 53.5441 52.1184 53.5034 51.7471 53.3123L45.7346 50.5075C43.7781 52.1 41.5486 53.4 39.0948 54.3393L38.5163 60.953C38.4963 61.3704 38.3162 61.7639 38.0136 62.052C37.711 62.3401 37.3091 62.5005 36.8913 62.5H23.8588C23.441 62.5005 23.0391 62.3401 22.7365 62.052C22.4339 61.7639 22.2539 61.3704 22.2338 60.953L21.6553 54.3393C19.2527 53.4226 17.0114 52.1291 15.0156 50.5075L9.00307 53.3123C8.63177 53.5046 8.20063 53.5464 7.79931 53.429C7.39798 53.3116 7.05737 53.0439 6.84832 52.6818L0.335319 41.44C0.125948 41.0786 0.0638348 40.6503 0.161875 40.2442C0.259915 39.8382 0.510576 39.4854 0.861819 39.2593L6.29907 35.4535C5.8919 32.9142 5.8919 30.3262 6.29907 27.7868L0.86507 23.981C0.514687 23.755 0.264624 23.4028 0.166623 22.9975C0.0686222 22.5922 0.130183 22.1647 0.338569 21.8035L6.84507 10.5228C7.05359 10.1601 7.39396 9.89179 7.79533 9.77374C8.1967 9.65569 8.62814 9.69699 8.99982 9.88904L15.0123 12.6938C17.0083 11.0732 19.2496 9.78084 21.6521 8.8653L22.2306 2.25154C22.2498 1.83365 22.4295 1.43928 22.7322 1.15052C23.0349 0.861758 23.4372 0.700852 23.8556 0.701295H36.8881H36.8913ZM30.3751 20.25C33.3919 20.25 36.2852 21.4485 38.4184 23.5817C40.5516 25.7149 41.7501 28.6082 41.7501 31.625C41.7501 34.6419 40.5516 37.5352 38.4184 39.6684C36.2852 41.8016 33.3919 43 30.3751 43C27.3582 43 24.465 41.8016 22.3317 39.6684C20.1985 37.5352 19.0001 34.6419 19.0001 31.625C19.0001 28.6082 20.1985 25.7149 22.3317 23.5817C24.465 21.4485 27.3582 20.25 30.3751 20.25ZM30.3751 23.5C28.2202 23.5 26.1536 24.3561 24.6298 25.8798C23.1061 27.4035 22.2501 29.4702 22.2501 31.625C22.2501 33.7799 23.1061 35.8466 24.6298 37.3703C26.1536 38.894 28.2202 39.75 30.3751 39.75C32.53 39.75 34.5966 38.894 36.1203 37.3703C37.644 35.8466 38.5001 33.7799 38.5001 31.625C38.5001 29.4702 37.644 27.4035 36.1203 25.8798C34.5966 24.3561 32.53 23.5 30.3751 23.5V23.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3>Скорость</h3>
            <p>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <svg
                width="61"
                height="63"
                viewBox="0 0 61 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.6611 41.349L50.7656 37.1565C51.7557 33.5158 51.7501 29.6761 50.7493 26.0383L56.6643 21.8978L51.9421 13.7273L45.3641 16.7368C42.7053 14.0589 39.3762 12.144 35.7246 11.1923L35.0973 4.00004H25.6528L25.0256 11.1923C21.3747 12.1453 18.0467 14.0613 15.3893 16.74L8.80807 13.7305L4.08907 21.901L10.0041 26.0415C9.00281 29.678 8.99608 33.5166 9.98457 37.1565L4.08907 41.349L8.80807 49.4805L15.3893 46.4678C18.0471 49.1453 21.375 51.0602 25.0256 52.0123L25.6528 59.2045H35.0973L35.7246 52.0123C39.3751 51.06 42.703 49.1452 45.3608 46.4678L51.9421 49.4805L56.6643 41.3523L56.6611 41.349ZM36.8913 0.701295C37.3097 0.700852 37.712 0.861758 38.0147 1.15052C38.3174 1.43928 38.4971 1.83365 38.5163 2.25154L39.0948 8.8653C41.4973 9.78084 43.7386 11.0732 45.7346 12.6938L51.7471 9.88904C52.1184 9.69797 52.5491 9.65721 52.9497 9.77522C53.3503 9.89322 53.6901 10.1609 53.8986 10.5228L60.4148 21.8003C60.6242 22.1618 60.6863 22.59 60.5883 22.9961C60.4902 23.4022 60.2396 23.7549 59.8883 23.981L54.4478 27.79C54.8638 30.3835 54.8508 32.9673 54.4511 35.4568L59.8883 39.2593C60.2404 39.4855 60.4917 39.8388 60.5898 40.2457C60.6878 40.6525 60.6252 41.0815 60.4148 41.4433L53.8986 52.6785C53.6901 53.0404 53.3503 53.3081 52.9497 53.4261C52.5491 53.5441 52.1184 53.5034 51.7471 53.3123L45.7346 50.5075C43.7781 52.1 41.5486 53.4 39.0948 54.3393L38.5163 60.953C38.4963 61.3704 38.3162 61.7639 38.0136 62.052C37.711 62.3401 37.3091 62.5005 36.8913 62.5H23.8588C23.441 62.5005 23.0391 62.3401 22.7365 62.052C22.4339 61.7639 22.2539 61.3704 22.2338 60.953L21.6553 54.3393C19.2527 53.4226 17.0114 52.1291 15.0156 50.5075L9.00307 53.3123C8.63177 53.5046 8.20063 53.5464 7.79931 53.429C7.39798 53.3116 7.05737 53.0439 6.84832 52.6818L0.335319 41.44C0.125948 41.0786 0.0638348 40.6503 0.161875 40.2442C0.259915 39.8382 0.510576 39.4854 0.861819 39.2593L6.29907 35.4535C5.8919 32.9142 5.8919 30.3262 6.29907 27.7868L0.86507 23.981C0.514687 23.755 0.264624 23.4028 0.166623 22.9975C0.0686222 22.5922 0.130183 22.1647 0.338569 21.8035L6.84507 10.5228C7.05359 10.1601 7.39396 9.89179 7.79533 9.77374C8.1967 9.65569 8.62814 9.69699 8.99982 9.88904L15.0123 12.6938C17.0083 11.0732 19.2496 9.78084 21.6521 8.8653L22.2306 2.25154C22.2498 1.83365 22.4295 1.43928 22.7322 1.15052C23.0349 0.861758 23.4372 0.700852 23.8556 0.701295H36.8881H36.8913ZM30.3751 20.25C33.3919 20.25 36.2852 21.4485 38.4184 23.5817C40.5516 25.7149 41.7501 28.6082 41.7501 31.625C41.7501 34.6419 40.5516 37.5352 38.4184 39.6684C36.2852 41.8016 33.3919 43 30.3751 43C27.3582 43 24.465 41.8016 22.3317 39.6684C20.1985 37.5352 19.0001 34.6419 19.0001 31.625C19.0001 28.6082 20.1985 25.7149 22.3317 23.5817C24.465 21.4485 27.3582 20.25 30.3751 20.25ZM30.3751 23.5C28.2202 23.5 26.1536 24.3561 24.6298 25.8798C23.1061 27.4035 22.2501 29.4702 22.2501 31.625C22.2501 33.7799 23.1061 35.8466 24.6298 37.3703C26.1536 38.894 28.2202 39.75 30.3751 39.75C32.53 39.75 34.5966 38.894 36.1203 37.3703C37.644 35.8466 38.5001 33.7799 38.5001 31.625C38.5001 29.4702 37.644 27.4035 36.1203 25.8798C34.5966 24.3561 32.53 23.5 30.3751 23.5V23.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3>Скорость</h3>
            <p>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <svg
                width="61"
                height="63"
                viewBox="0 0 61 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.6611 41.349L50.7656 37.1565C51.7557 33.5158 51.7501 29.6761 50.7493 26.0383L56.6643 21.8978L51.9421 13.7273L45.3641 16.7368C42.7053 14.0589 39.3762 12.144 35.7246 11.1923L35.0973 4.00004H25.6528L25.0256 11.1923C21.3747 12.1453 18.0467 14.0613 15.3893 16.74L8.80807 13.7305L4.08907 21.901L10.0041 26.0415C9.00281 29.678 8.99608 33.5166 9.98457 37.1565L4.08907 41.349L8.80807 49.4805L15.3893 46.4678C18.0471 49.1453 21.375 51.0602 25.0256 52.0123L25.6528 59.2045H35.0973L35.7246 52.0123C39.3751 51.06 42.703 49.1452 45.3608 46.4678L51.9421 49.4805L56.6643 41.3523L56.6611 41.349ZM36.8913 0.701295C37.3097 0.700852 37.712 0.861758 38.0147 1.15052C38.3174 1.43928 38.4971 1.83365 38.5163 2.25154L39.0948 8.8653C41.4973 9.78084 43.7386 11.0732 45.7346 12.6938L51.7471 9.88904C52.1184 9.69797 52.5491 9.65721 52.9497 9.77522C53.3503 9.89322 53.6901 10.1609 53.8986 10.5228L60.4148 21.8003C60.6242 22.1618 60.6863 22.59 60.5883 22.9961C60.4902 23.4022 60.2396 23.7549 59.8883 23.981L54.4478 27.79C54.8638 30.3835 54.8508 32.9673 54.4511 35.4568L59.8883 39.2593C60.2404 39.4855 60.4917 39.8388 60.5898 40.2457C60.6878 40.6525 60.6252 41.0815 60.4148 41.4433L53.8986 52.6785C53.6901 53.0404 53.3503 53.3081 52.9497 53.4261C52.5491 53.5441 52.1184 53.5034 51.7471 53.3123L45.7346 50.5075C43.7781 52.1 41.5486 53.4 39.0948 54.3393L38.5163 60.953C38.4963 61.3704 38.3162 61.7639 38.0136 62.052C37.711 62.3401 37.3091 62.5005 36.8913 62.5H23.8588C23.441 62.5005 23.0391 62.3401 22.7365 62.052C22.4339 61.7639 22.2539 61.3704 22.2338 60.953L21.6553 54.3393C19.2527 53.4226 17.0114 52.1291 15.0156 50.5075L9.00307 53.3123C8.63177 53.5046 8.20063 53.5464 7.79931 53.429C7.39798 53.3116 7.05737 53.0439 6.84832 52.6818L0.335319 41.44C0.125948 41.0786 0.0638348 40.6503 0.161875 40.2442C0.259915 39.8382 0.510576 39.4854 0.861819 39.2593L6.29907 35.4535C5.8919 32.9142 5.8919 30.3262 6.29907 27.7868L0.86507 23.981C0.514687 23.755 0.264624 23.4028 0.166623 22.9975C0.0686222 22.5922 0.130183 22.1647 0.338569 21.8035L6.84507 10.5228C7.05359 10.1601 7.39396 9.89179 7.79533 9.77374C8.1967 9.65569 8.62814 9.69699 8.99982 9.88904L15.0123 12.6938C17.0083 11.0732 19.2496 9.78084 21.6521 8.8653L22.2306 2.25154C22.2498 1.83365 22.4295 1.43928 22.7322 1.15052C23.0349 0.861758 23.4372 0.700852 23.8556 0.701295H36.8881H36.8913ZM30.3751 20.25C33.3919 20.25 36.2852 21.4485 38.4184 23.5817C40.5516 25.7149 41.7501 28.6082 41.7501 31.625C41.7501 34.6419 40.5516 37.5352 38.4184 39.6684C36.2852 41.8016 33.3919 43 30.3751 43C27.3582 43 24.465 41.8016 22.3317 39.6684C20.1985 37.5352 19.0001 34.6419 19.0001 31.625C19.0001 28.6082 20.1985 25.7149 22.3317 23.5817C24.465 21.4485 27.3582 20.25 30.3751 20.25ZM30.3751 23.5C28.2202 23.5 26.1536 24.3561 24.6298 25.8798C23.1061 27.4035 22.2501 29.4702 22.2501 31.625C22.2501 33.7799 23.1061 35.8466 24.6298 37.3703C26.1536 38.894 28.2202 39.75 30.3751 39.75C32.53 39.75 34.5966 38.894 36.1203 37.3703C37.644 35.8466 38.5001 33.7799 38.5001 31.625C38.5001 29.4702 37.644 27.4035 36.1203 25.8798C34.5966 24.3561 32.53 23.5 30.3751 23.5V23.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3>Скорость</h3>
            <p>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Important;
