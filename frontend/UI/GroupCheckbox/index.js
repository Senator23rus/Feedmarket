import classNames from "classnames";

const GroupCheckbox = ({onClick, children,...other}) => {

    let checkboxes = children.filter(item => item.type?.name === "Checkbox");

    console.log(checkboxes[0].checked);
    console.log(checkboxes)

    const clickHandler = (e) => {
        if (onClick) {
            onClick(e);
        }

        let cb = e.target;

        if (cb.closest('.wrapper')) {
            if (e.target.dataset.main) {}
        }
    }

  return(
      <div onClick={clickHandler} {...other}>
          {children}
      </div>
  );
}

export default GroupCheckbox;