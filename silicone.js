// classes
class person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    addAge() {
     this.age = this.age + 1;   
    }

    setJob(input1) {
        this.job = input1;
    }

    get age() {
        return this.age;
    }

    get name() {
        return this.name;
    }

    get job() {
        return this.job;
    }
}

class customer {
    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    addAge() {
        this.age = this.age + 1;
    }

    get name() {
        return this.name;
    }

    get age() {
        return this.age;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
}

class finance {
    constructor(money, avgPay) {
        this.money = money;
        this.avgPay = avgPay;
    }

    addMoney(input1) {
        this.money = money + input1;
    }

    removeMoney(input1) {
        this.money = money - input1;
    }

    get money() {
        return this.money;
    }

    get avgPay() {
        return this.avgPay;
    }
}

class group {
    constructor(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10) {
        this.var1 = var1;
        this.var2 = var2;
        this.var3 = var3;
        this.var4 = var4;
        this.var5 = var5;
        this.var6 = var6;
        this.var7 = var7;
        this.var8 = var8;
        this.var9 = var9;
        this.var10 = var10;
    }

   get var1() {
    return this.var1;
   }

   get var2() {
    return this.var2;
   }

   get var3() {
    return this.var3;
   }

   get var4() {
    return this.var4;
   }

   get var5() {
    return this.var5;
   }

   get var6() {
    return this.var6;
   }

   get var7() {
    return this.var7;
   }

   get var8() {
    return this.var8;
   }

   get var9() {
    return this.var9;
   }

   get var10() {
    return this.var10;
   }

}
// write your code here