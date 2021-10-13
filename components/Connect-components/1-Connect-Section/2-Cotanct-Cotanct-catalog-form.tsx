import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// import { formSubmit } from "../../../lib";
import { useSubmitHook } from "../../../hooks";
// ------------------------------ ---------------------- --------

interface PassingProps {
  contactContactCatalogForm: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const ContactContactCatalogForm: React.FunctionComponent<AppProps> = ({
  contactContactCatalogForm,
}) => {
  const { onSubmit, myRef, handleChange } = useSubmitHook();
  const formHeader = {
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
    marginTop: 10,
  };
  const formInput = {
    paddingRight: 200,

    fontFamily: "IRANSansWeb",

    paddingBottom: 5,
    paddingTop: 3,
    paddingLeft: 10,
    borderRadius: 30,
  };
  const formHeader1 = {
    marginLeft: 760,
    marginTop:-40
  };
  const formHeader2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  };
  const formHeader3 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  };

  const textArea = {
    marginLeft:545,marginTop:30
  };
  const textAreaInput = {
    paddingRight: 150,
    borderRadius: 10,
    fontFamily: "IRANSansWeb",
  };
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
  } = contactContactCatalogForm;

  return (
    <>
      <form onSubmit={onSubmit} ref={myRef}>
        <div className="formOne" style={formHeader}>
          <input
            onChange={handleChange}
            style={{padding:10}}
            type="text"
            name="Name"
            placeholder={FirstHeader}
            required={true}
            data-error="First name is required."
          />
        </div>
        <div className="formTwo" style={formHeader1}>
          <input
            style={{padding:10,}}
            onChange={handleChange}
            type="email"
            name="Email"
            placeholder={SecondHeader}
            required={true}
            data-error="Valid email is required."
          />
        </div>
        <div className="formHeader2" style={formHeader2}>
          <input
            style={{padding:10}}
            onChange={handleChange}
            type="tel"
            name="Phone"
            data-error="Valid email is required."
            placeholder={ShortDescription}
          />
        </div>
        <div className="text-Area" style={textArea}>
          <textarea
            name="Message"
            id="message"
            cols={30}
            rows={7}
            onChange={handleChange}
            style={{paddingRight:100}}
            placeholder={LongDescription}
            data-error="Please,leave us a message."
          ></textarea>
        </div>
        <div style={formHeader3}>
          <input
            className="submitButton"
            style={{
              padding: 15,
              paddingLeft: 70,
              paddingRight:70,
              marginTop: 30,
              borderRadius:50,
              textAlign: "center",
              backgroundColor: "black",
              color: "#fff",
              cursor: "pointer",

              fontFamily: "IRANSansWeb",
            }}
            type="submit"
            value={ChildFirstHeader}
          />
        </div>

      </form>
      <style jsx>{`
        @media screen and (max-width: 1400px) {
        .formTwo{
        position: relative;
        left:20px;
        }
        .text-Area{
        position: relative;
        left:20px;
        }
        }
        
                @media screen and (max-width: 1200px) {
        .formTwo{
        position: relative;
        left:-80px;
        }
        .text-Area{
        position: relative;
        left:-80px;
        }
        }
                  @media screen and (max-width: 1000px) {
        .formTwo{
        position: relative;
        left:-180px;
        }
        .text-Area{
        position: relative;
        left:-180px;
        }
        }
                    @media screen and (max-width: 800px) {
        .formTwo{
        position: relative;
        left:-280px;
        }
        .text-Area{
        position: relative;
        left:-280px;
        }
        }
                      @media screen and (max-width: 600px) {
        .formTwo{
        position: relative;
        left:-380px;
        }
        .text-Area{
        position: relative;
        left:-380px;
        }
        }
                             @media screen and (max-width: 400px) {
        .formTwo{
        position: relative;
        left:-580px;
        }
        .text-Area{
        position: relative;
        left:-580px;
        }
        .formOne{
        position: relative;
        left: -100px;
        }
        .formHeader2{
        position:relative;
        left:-100px;
        }
        }
        
      `}</style>

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      // catalogData: await DataService.filterCatalogDataBySectionField(""),
    },
  };
};
