# Vue3-TS-error

```
git clone git@github.com:LongJinCen/Vue3-TS-error.git
npm install
npm run build
```

The following error occurs



``` javascript
[tsl] ERROR in /Users/bytedance/code/webpack5-ts-vue3/src/App.vue.ts(14,3)
      TS2769: No overload matches this call.
  The last overload gave the following error.
    Type 'undefined' is not assignable to type 'Readonly<ComponentPropsOptions<Data>> & ThisType<void>'.
      Type '(this: void, __props: { hintMsg: string; iconName: string; }, { expose }: SetupContext<EmitsOptions>) => { hint: Ref<null>; }' is not assignable to type '(this: void, props: Readonly<LooseRequired<(Readonly<(readonly unknown[] & { [x: number]: string; } & { [iterator]?: IterableIterator<string> | undefined; length?: number | undefined; toString?: string | undefined; toLocaleString?: string | undefined; ... 19 more ...; flat?: unknown[] | undefined; }) | ({ ...; } & ....'.
        Types of parameters '__props' and 'props' are incompatible.
          Type 'Readonly<LooseRequired<(Readonly<(readonly unknown[] & { [x: number]: string; } & { [iterator]?: IterableIterator<string> | undefined; length?: number | undefined; toString?: string | undefined; toLocaleString?: string | undefined; ... 19 more ...; flat?: unknown[] | undefined; }) | ({ ...; } & ... 1 more ... & { .....' is missing the following properties from type '{ hintMsg: string; iconName: string; }': hintMsg, iconName

```
