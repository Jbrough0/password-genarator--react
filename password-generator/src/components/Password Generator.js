import charSets from "../charSets" ;

class Password {
    constructor(
        length = 10,
        upper = true,
        lower = true,
        special = true,
        nums = true
      ) {
          this.options = {
              upper,
              lower, 
              special,
              nums,
              length
          };
          this.value = this.generatePassword();
        }
        passMinLength() {
            if (this.length >=6) {
                return true;
            }
            return false;
        }
        validOptions(upper, lower, nums, special) {
            if (!upper && !lower & !nums && !special) {
                return false;
            }
            return true;
        }
        generatePassword() {
            const length = this.options.length;
            let password = "";
            while (password.length < length) {
                const char = this.generateX();
                if (char) {
                    password += char;
                }
            }
            return password;
        }
        generateX() {
            const randomBranch = Math.floor(Math.random() * 5);

            switch (randomBranch) {
                case 0:
        if (this.options.nums === true) {
          return this.num();
        }
        break;
      case 1:
        if (this.options.upper === true) {
          return this.upper();
        }
        break;
      case 2:
        if (this.options.lower === true) {
          return this.lower();
        }
        break;
      case 3:
        if (this.options.special === true) {
          return this.special();
        }
        break;
      default:
        throw new Error("Something went wrong!!");
    }
  }
  randomFromCharSet(chars) {
      const random= Math.floor(Math.random() * chars.length);
      return chars[random];
  }
  num() {
      const randomNumber = Math.floor(Math.random() * 8);
      return randomNumber;
  }
  lower() {
      const chars = charSets.lower;
      return this.randomFromCharSet(chars);
  }
  upper() {
    const chars = charSets.upper;
    return this.randomFromCharSet(chars);
  }
  special () {
      const chars = charSets.special;
      return this.randomFromCharSet(chars);
  }
}
export default Password;
