import { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const services = [
    "قص الغرة",
    "تحديد أطراف الشعر - مقص",
    "تحديد أطراف الشعر-ماكينة",
    "قصة شعر مستوى واحد -مقص",
    "قصة شعر مستوى واحد -ماكينة",
    "قصة شعر احترافية -مقص",
    "قصة شعر بوي",
    "تخفيف تحديد (قصة بوي)",
    "استشوار شعر قصير",
    "استشوار شعر طويل",
    "حمام زيت-شعر قصير",
    "حمام زيت-شعر متوسط",
    "حمام زيت-شعر طويل",
    "فيلر-شعر قصير",
    "فيلر-شعر متوسط",
    "فيلر-شعر طويل",
    "تريتمنت-شعر قصير",
    "تريتمنت-شعر متوسط",
    "تريتمت-شعر طويل",
    "دييتوكس لفروة الراس",
    "غسيل شعر يومي",
    "(ضد القشرة)غسيل شعر يومي",
    "صبغة حواجب",
    "تشقير حواجب",
    "فتلة حواجب",
    "تنظيف البشرة بجهاز الهيدرافيشل",
    "تنظيف بشرة عميق",
    "صبغة لون واحد-شعر قصير",
    "صبغة لون واحد -شعر متوسط",
    "صبغة لون واحد -شعر طويل",
    "صبغة الجذور- لون واحد",
    "الصبغات الاحترافية تحتاج سحب لون",
    "ويفي شعر قصير",
    "ويفي شعر متوسط",
    "ويفي شعر طويل",
    "نص رفعة",
    "تسريحة مرفوعة بالكامل شعر متوسط",
    "تسريحة مرفوعة بالكامل شعر طويل",
    "تغطية فراغات الشعر بالبودرة المخصصة",
    "مكياج ناعم",
    "مكياج مناسبات",
    "تركيب رموش للمكياج",
    "باديكير أقدام شامل التقشير والمساج",
    "باديكير أيدي شامل التقشير والمساج",
    "برافين يدين",
    "استخدام أدوات عناية خاصة بالزبونة",
    "قص وتبريدالأظافرالاقدام او الايدي",
    "لون مناكير",
    "شمع/واكس الشنب",
    "شمع/واكس الواجهة كامل",
    "شمع/واكس الرقبة",
    "شمع/واكس اليدين",
    "شمع/واكس الرجلين الى الركبة",
    "شمع/واكس الظهر",
    "مانكير أيدي أطفال",
    "بدكير أيدي أطفال",
    "لون للأطفال",
  ];
  const [enteredValue, setEnteredValue] = useState("");
  const [selectValue, setSelectValue] = useState("null");
  const [isvalid, setIsValid] = useState(true);

  const NameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const ServiceInputChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue, selectValue);
    setEnteredValue("");
    setSelectValue("null");
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isvalid ? "invalid" : ""}`}>
          <label>اسم الزبونة</label>
          <input
            value={enteredValue}
            type="text"
            onChange={NameInputChangeHandler}
          />
        </div>
        <div className={`form-control`}>
          <label>اسم الخدمة</label>
          <select value={selectValue} onChange={ServiceInputChangeHandler}>
            {services.map((service) => (
              <option value={service}>{service}</option>
            ))}
            <option value="null"></option>
          </select>
        </div>
        <button className="button" type="submit">
          اضافة حجز
        </button>
      </form>
    </>
  );
};
export default InputForm;
