import {Component} from "../modules";

/**
 * UIKit Toggle
 *
 * @class Members
 * @extends {Component}
 */
class ShowHide extends Component {
  /**
   * Checks scroll position is over banner or not, and applies header background.
   *
   */
  constructor() {
    super("C14");

    if (super.exists()) {
      window.UIkit.util.on("#toggle-content", "shown", function() {
        document.getElementsByClassName("C05-show-hide__button-shown")[0].classList.add("hidden");
        document.getElementsByClassName("C05-show-hide__button-hidden")[0].classList.remove("hidden");
      });
      window.UIkit.util.on("#toggle-content", "hidden", function() {
        document.getElementsByClassName("C05-show-hide__button-shown")[0].classList.remove("hidden");
        document.getElementsByClassName("C05-show-hide__button-hidden")[0].classList.add("hidden");
      });
    }
  }
}

export {ShowHide};
