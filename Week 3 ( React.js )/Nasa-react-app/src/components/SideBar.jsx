import React from "react";

const SideBar = (props) => {

  const {handleToggleModal} = props;

  return (
    <div className="absolute right-0 flex flex-col gap-2 lg:w-4/12 sm:w-6/12 h-screen bg-black text-white ml-96 overflow-y-scroll z-5">
      <h2 className="text-3xl sm:text-3xl lg:text-5xl ml-4 mt-10 font-semibold">
        Mars Landscape
      </h2>
      <div className="p-4 text-neutral-400 ">
        <p className="mb-2">Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente rem saepe voluptas mollitia ea deleniti nemo repellat et corrupti quidem ullam maxime, labore, voluptatibus, tempora cum nesciunt? Natus omnis iure veritatis quas, dolorum reiciendis corrupti sed ullam placeat, est aliquam beatae doloremque unde commodi optio reprehenderit quod aut sequi similique debitis modi. Dolorum repellendus maiores pariatur, vero amet labore ullam quidem, recusandae dignissimos fuga, quam magnam beatae ad quo consequuntur natus repudiandae distinctio totam! Quisquam perferendis, impedit pariatur recusandae veritatis, consequatur accusantium fuga ipsa corrupti, optio quaerat nulla mollitia quo ad veniam dolorum voluptate animi? Molestias alias cum vel accusantium recusandae corporis? Impedit aliquam asperiores similique pariatur est consequatur repudiandae sapiente magnam, dicta tenetur unde. Soluta fuga enim vero, doloremque deleniti provident in vel quas, omnis nulla eligendi eveniet eius et rem. Consectetur fugit exercitationem similique magnam accusamus illum non a tempora id, excepturi perspiciatis ab deleniti? Natus aut sunt rerum quas soluta ut ipsam illum repellat aliquam voluptates, expedita in animi. Amet qui molestiae, cupiditate quisquam minus numquam fugit aspernatur quae quod autem adipisci veritatis eaque facere consequatur veniam ipsum eius, fugiat exercitationem ipsam debitis, dolor quia? Sint sapiente qui ex nobis! Necessitatibus, distinctio consectetur reprehenderit officiis amet modi rem dolor quos inventore ab iure in totam nisi dolorem, quod quisquam sunt natus? Et, eligendi impedit odio eos esse cum vitae modi? Natus perferendis, distinctio esse aut tenetur eaque consequatur exercitationem dolores! Dolore quibusdam repudiandae ex animi! Dicta enim nemo suscipit, magni aliquam eum molestias itaque eligendi doloribus quas asperiores explicabo sint totam eius inventore optio nobis provident, odit a voluptatibus quisquam eveniet voluptates consectetur! Excepturi, explicabo! Iure harum quam dicta vero. Dicta laborum quasi iure unde ea veritatis suscipit cumque odio quis quam necessitatibus facere, natus corporis alias dolor sed quibusdam totam? Recusandae eos voluptas alias officia eligendi ex error non ea dolore eveniet tenetur soluta perferendis cumque quasi mollitia ad porro illo nam, voluptatibus at quae odit! Nobis recusandae laborum ipsam non doloremque, voluptate provident id incidunt eveniet necessitatibus maiores facilis voluptas hic blanditiis in labore itaque nesciunt. Earum vero placeat, repudiandae nam aspernatur dolorum. Eaque voluptas deserunt, quo vel maxime dolorem eius corporis architecto laudantium tenetur accusamus assumenda officiis. Nesciunt nihil illum possimus libero provident vero magnam ad et id labore harum iure rem, incidunt, at rerum sapiente? Rerum porro minima nesciunt tempore facere quo nobis repudiandae deleniti beatae animi officia temporibus, molestias modi incidunt cumque earum est quibusdam. Eveniet dolor quas eum dolorem, suscipit facere sequi neque. Placeat ducimus deserunt laboriosam ad cumque! Maxime tempora repellendus veritatis! Vel laborum veniam, laudantium asperiores doloribus consectetur aut quam, alias accusamus maiores saepe similique reiciendis velit ipsum molestiae eligendi deserunt dolor? Nemo suscipit vitae, ipsam saepe molestiae ut a, asperiores illum assumenda vel magni quibusdam eos corporis blanditiis id. Iusto, veniam obcaecati velit aliquam eos quam, odio aliquid asperiores necessitatibus aperiam culpa libero! Ullam dolores mollitia reprehenderit cum, repellendus eos incidunt excepturi sed voluptate sunt delectus perferendis libero dolorum! Expedita soluta reiciendis laudantium doloribus dolores numquam illo?
        </p>
      </div>
      <button onClick={handleToggleModal} className="border-none outline-none mr-auto pl-5 text-xl lg:text-2xl hover:text-neutral-400 cursor-pointer">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  );
};

export default SideBar;
