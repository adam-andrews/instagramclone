export const generateAvatar = () => {
    const seed = Math.random();   
    const avatar = `https://avatars.dicebear.com/api/bottts/${seed}.svg`;
    return avatar  
  };
  