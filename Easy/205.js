// Isomorphic Strings

const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let b = t[i];

    if (mapST.has(a) || mapTS.has(b)) {
      if (mapST.get(a) !== b || mapTS.get(b) !== a) return false;
    }

    mapST.set(a, b);
    mapTS.set(b, a);
  }
  return true;
};
