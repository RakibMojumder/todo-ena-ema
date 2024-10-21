import styles from "./modal.module.css";
import { RxCross2 } from "react-icons/rx";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ y: -50 }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          className={styles.modal_container}
        >
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <span>Modal header</span> <RxCross2 size={24} />
            </div>
            <div className={styles.modal_content}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              dolorum quas consequatur nobis officia nemo soluta quo est? Minima
              quod sunt, consequatur rem sapiente repellat, perspiciatis tempore
              sequi autem quo quis eos labore nam iure natus obcaecati fugiat
              suscipit, officiis quas eligendi laboriosam magni possimus facere
              quaerat. Dolorum minus ut quisquam quidem necessitatibus culpa
              ipsum excepturi vel officiis optio reiciendis facilis beatae atque
              laborum ullam, quod fugiat, nemo voluptate corrupti aut
              voluptatem? Voluptate voluptatibus est beatae blanditiis eligendi.
              Architecto impedit explicabo distinctio quaerat consectetur
              deserunt, fugiat esse voluptatibus, pariatur repellat delectus
              ipsa hic veniam, odio exercitationem quisquam quam voluptatum
              placeat officia eligendi ipsam. Rerum odit, quaerat minima fuga
              excepturi hic reprehenderit dignissimos. Esse corrupti
              dignissimos, voluptatum rerum recusandae quaerat maxime, nam quia
              dicta cum temporibus voluptatem repellat. Suscipit molestiae rerum
              porro, aliquam ipsum delectus sint voluptas, dolore praesentium ea
              eaque ipsa et corrupti. Molestias itaque omnis cumque illo, velit
              rerum ab dolor voluptas laborum nesciunt tenetur vel optio id
              dolores, rem magnam quibusdam! Provident omnis libero nobis
              tenetur dicta obcaecati perspiciatis, quam fugiat reprehenderit
              praesentium inventore atque esse, eius sit aliquid maxime,
              mollitia dolorem fugit impedit. Voluptatum illum, dolore, dolorum
              ipsum nemo odit iure temporibus itaque neque exercitationem
              molestiae? Numquam magni corporis voluptatem et. Fuga nostrum
              alias, ea praesentium voluptates nobis atque labore et nihil iure
              sit voluptas fugiat dolorum a architecto at quasi quae unde nisi
              commodi! Minima, voluptatibus itaque? Magnam doloremque assumenda
              distinctio eligendi velit eos magni adipisci ipsam provident! Sint
              vel tempore magnam et ipsum officia aut veniam nobis accusantium.
              Dignissimos aspernatur accusantium repellat, dolorem autem ipsum
              vero, itaque recusandae ratione cum dolorum maiores facilis
              tempore. Omnis sint cupiditate labore a dolor amet quas eligendi
              corrupti, in voluptas. Fugiat, et! Similique, sapiente possimus.
              Vel, mollitia corrupti minus ad quod numquam ipsum quam aperiam
              eum velit dicta eius eligendi hic nemo illo dolorem debitis labore
              possimus tenetur autem. Unde ea obcaecati ab libero magni et,
              voluptas illum nulla error, iste debitis odio inventore earum rem
              minus blanditiis. Non assumenda fugiat eaque sunt nobis. Dolore
              sequi ea vitae porro saepe quisquam odit facilis nesciunt
              voluptatibus minus est architecto repellendus obcaecati dolorem
              nemo laboriosam eum suscipit doloribus consequatur consectetur,
              maxime aliquam culpa! Officiis modi atque tempore neque, doloribus
              totam, libero blanditiis ab unde consequatur labore fugit
              voluptatibus? Mollitia ab, iure asperiores laborum ratione quo
              voluptatum natus dignissimos eos deleniti iste repudiandae
              molestias blanditiis eaque omnis nulla. Voluptatem error, impedit
              labore animi soluta, incidunt quidem adipisci perspiciatis maxime
              consectetur, dicta eaque? Possimus veniam deleniti dolorem
              veritatis similique deserunt, natus repellat fugiat expedita odit
              ad quia modi minima quaerat et ducimus quisquam excepturi
              reprehenderit amet enim corporis consectetur recusandae sapiente
              porro! Delectus est perspiciatis libero corrupti iusto pariatur
              molestiae, sed sunt quidem molestias eum cupiditate corporis
              placeat dolores tempora distinctio fuga earum officia? Et cum,
              fuga ad repudiandae quia sed ipsum atque soluta debitis nostrum
              necessitatibus iure rerum impedit illum omnis beatae at nisi unde
              vel aperiam quis asperiores accusantium porro quod? Cupiditate
              rerum earum repudiandae, et impedit maiores inventore ea
              repellendus.
            </div>
            <div className={styles.modal_footer}>
              {" "}
              <span>Modal header</span> <RxCross2 size={24} />
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
