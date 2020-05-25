export declare type ResponsiveProp<Atom> = Atom | Readonly<[Atom]> | Readonly<[Atom, Atom]> | Readonly<[Atom, Atom, Atom]> | Readonly<[Atom, Atom, Atom, Atom]> | Readonly<[Atom, Atom, Atom, Atom, Atom]>;
export declare function resolvePrefixes(prop: ResponsiveProp<any>, resolver: (p: any) => string): string;
