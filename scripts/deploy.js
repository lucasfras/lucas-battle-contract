const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(
        ['HoundEye', 'Jack', 'KinoAli', 'Nihilats', 'TheMagic'],
        ["QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/houndeye.jpg",
        "QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/jack.jpg",
        "QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/kinoali.jpg",
        "QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/nihilats.jpg",
        "QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/themagic.jpg"
      ],
        [300, 350, 250, 300, 350],
        [50, 40, 60, 50, 40],
        "Big Boss",
        "QmSGECWTwwn9F5977TJuBgFjmM4EtJM4La5DtCSAxWFkGm/bigboss.jpg",
        3000,
        1
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();