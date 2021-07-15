'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "497bd08185198be3c27f3c39851fde29",
"index.html": "af45ac3c68225458d3e4721db41ebc31",
"/": "af45ac3c68225458d3e4721db41ebc31",
"styles.css": "01ddf5811b8593a3d721ede630e064d4",
"main.dart.js": "a5659ce8d44cac8f97c81ecda34fd36e",
"img/splash.jpeg": "9a8e1b77f31eaccbedfda03f45f9a89f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6bfdfec1f4f296af7acda39826046cf7",
".git/ORIG_HEAD": "8e7c5f004bac7307a1b022a15e6a9fea",
".git/config": "c1e8f6be371c3a223600e29f6ffe331b",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/59/fb71d4e8db934ed7d74107f64b21c211817b6e": "61294aa1b90b204462b85856af4f30a3",
".git/objects/6a/063595c77a1094213b3aae3359275ad24aedd3": "c6a52d9a39809f6aaa32ab7014e588f2",
".git/objects/6a/f6ac779207be61fdd4e49061268d2937296507": "989753beb72d0a3ba132f980c90a3b17",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/59ab46064f82c956b445454087bd9085aa7d47": "80f63b7544cd9c77f4e66f4fc075cf53",
".git/objects/69/9b247184779b966db9f9a84a5a7f7e86d06960": "c66d41f2252d0aec8a4f3216bfeb5cc5",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/56/fd6262ab85a62a3674dfce420c001971ab2811": "4329a7dc741533a35f9e2e8f1c576484",
".git/objects/94/f3e6dd2175eb6e64f7bc2ebf4c569d9931c261": "2991522a51d8aca93b2ee92ee541aecf",
".git/objects/0e/359f1dc7b09a5ed7bcd7755e8c4be713449589": "a4a5c99a957caf2b48ab030d0fe4a434",
".git/objects/5f/6dafb6b892cfe17bbb86b46a978e655298ea7e": "91dec63378397c48194ab0e39feca885",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/33/f2863e09de85cda7d1fd4f7d0bd03340a4b97e": "0246f9640d71b9976a6187a56c92e442",
".git/objects/05/c74711b653f63a23ed7b1d3a949b2aeda973be": "260e82956156d764e86b4474788ffeca",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/a3/578577bd0e26efaf0c84e02c74af63d48afd6a": "f72af23df2c2157dedbe87ee72c1da92",
".git/objects/b2/0eddda4b8078642eace9765867b4fdf11c9d99": "38f5d0870d819d1eabd4cb1c2fa8991c",
".git/objects/d9/d8c003a3526adb26ba865ac4df4f0561c14296": "e0384f34309d3b34b4592e162d0b848f",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/54a4f2af8d5011dadbe9ee5d5c172735229de5": "9dab55cd42e45d36b026d8334e2abfcd",
".git/objects/bd/f71333a82e4107daa7756a9c241019e8d9accf": "346192cdc1fbb392ae8d9a0a62b51002",
".git/objects/d6/8b411516f5a0d52bca1c72d8c4f40d49c2a089": "5093bf58d141ece45aa10ce9a0438fd4",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/066e3c6ae2acd01b708696148936cbbd4a2d2a": "6172acaa08b9653568367544d12bad9e",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/d8/6fb30081d45625d1a5d51ca1555668f9b15def": "14022fdf882f8c6c106bd8f330cebebb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/a2abff7eb19e74ab7c10085cda33ca7b9e4015": "00bfa90b186e5db15f8d6189f7deb81d",
".git/objects/eb/10ffc7751fdfb69e383f770e81243a40e87c18": "26ee0cec2f810a5374dd65e4524c0453",
".git/objects/c0/ff9e81511f23473ac45d4090ff8813320709c8": "78cb17ae1e6a0c35bbdce39b20da13ae",
".git/objects/c0/2dc641104cc6f4f5c7e3d6f99bccee28752fda": "cd40e7dac10b96840f4d1585fef35908",
".git/objects/ee/63f9361a8b0b5d04426a21d8db3994e8b9509e": "582463cc4846f5e52eb8da1f683f64ee",
".git/objects/fc/b714d8eb4510e597ce003bffd649b66da51c2f": "1638ada25d2a19865b985adf9fcaf04d",
".git/objects/f5/37b0888ac095b69dd5c8038625b3f552d7222a": "61d12f7dcb01c099232294a990b5bcff",
".git/objects/f5/3f2b91d3abcc85895924729fecd181ecc34af8": "7a757716934320220df750f2bd7dcee5",
".git/objects/ca/2696e399cb760b346ee38c6535bbf46f0f1e89": "bb1e4851ff137540a65d2cebaf769ef4",
".git/objects/c8/5f832dbcd58c6c0874a52bcea9d1059700c3eb": "c802eb180cdbda9426f1a356017b40fd",
".git/objects/c1/a3767ccbcf6714134869bea7868bad29ed92f4": "7066f06b44a49e2d2ba467fd6f130c3b",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/174055296541c167e452a8aa4dc1b705bd9d3c": "691dd5ba446f4eee6254f681ee95e863",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/20/fd374e288d3f42c08bec87707d4a192582cf44": "be2f8966599c27a3903055c25ef64760",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/a8a40bf3ed78dbd0c6bd7d9ef85b661e13e081": "5ee5254c51242c757e987206feca4a32",
".git/objects/27/ed4585508428f206f082aa98d5169e83d59e3c": "3cb56491398e0811da19bbe58f8b2fef",
".git/objects/4b/74a7b5dd6d41545a5a6b44713a6e34172b0d95": "56694aa287a2fe30f20690da17604169",
".git/objects/11/41d03bb275f6ea209b3b0576246f0c93dffe1c": "79134d0e271b3cd00aba2835e583dcd8",
".git/objects/11/f1708ca1ac206a9c5764752ee6f339d4d48e49": "d740efd81b6a3fb8a6847f0e10bf62e1",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/17/7b1a978421d353f409134fb38491e2c5f0bcb2": "b4239a55260ca510c96394e3123407f5",
".git/objects/8f/67b49198d198d46fac43b072e3a28fed39cb92": "e9590b7e9aad031fc1a96ffa9a90c1d8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/cd984afb88b48e8798b2288c6e53bb3cf47452": "fe02092a48eafc2612b80e1012f350d6",
".git/objects/10/a90ee5e4b4bcfa42f1f41cf37dd3654d4f6da9": "1a35645782ab0388be74f8e9c85cfd80",
".git/objects/19/1df636e1c4aa725902a04824ffceded801c5b1": "555553039b3f16001a87b81df0587b79",
".git/objects/26/92f32297252d18a313b83661db0bc534370a96": "5a6c6dc6b3055bb0d09621688a4595e9",
".git/objects/21/0282117ffc6ca05a29aed21f9a9bb004fe18f0": "d7121a694bef7343cf035bbd967f93bf",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/75/e14c66c69af82da83a6f8966a1d00b59d5ce23": "1449c925507fe50866a3bb6946d9ed5f",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/44/416aabdbacd78b5034e4e7bb4478dd4d7a387a": "18fd97218da51ca96125346188c197cc",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/86afe211323b03c935cc41f63b2dd220ff0012": "c62b16b7109a133f2e373624e7390887",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/b29d1ec2988beece4dfa4a4947fc9c5e1a22c5": "a2c61d9a7d6b3dce81a7dd0d14e7ea84",
".git/objects/9a/60d17f760cd6b1b03fdfc09c44d92db5cf87b9": "6de455e4b0c9cd39376584a8c2a1d334",
".git/objects/5c/b15be79af2400bb5e4fb0d2568959956260da7": "ec4e97eef90625584018314aaaffe4df",
".git/objects/09/545e264ad27adcb8953ac9e474262aba3d3d78": "37937ca5c5a3d4b1f834768da0cd0eef",
".git/objects/65/19974754e39d383bdef595d1202c9f2219cb97": "18d8733c36b85fcf0fe921c4a7944d9a",
".git/objects/54/d27c0c2a08825c1403261089065c4330473187": "20043931842956ea0a4e598485913c61",
".git/objects/54/547d9073903711d6d2f33945247ee8e89bc8f3": "56a5bf754c86f97550fb4d03a526baf7",
".git/objects/98/c2a26a70c12769ce50d2954e9b660b3afaa1e1": "7fd14ef9ced95826e16bf816ec1e44a8",
".git/objects/53/b6cb6722c6fefd7e3d473702172f2a45486cfa": "07d1e98420280965a8142ed498d038a6",
".git/objects/30/7dad1757df2fabea272cd40b61ba33bf04cec0": "f34257b65d4efc30b7e327cd220647f1",
".git/objects/08/ca3d18ae76245abf55aefaad4b4a9064229450": "5157006a038a4d8012577c6e98eea607",
".git/objects/6d/6b8cfc66f1e47828f81193e05ed8354b8a2cc1": "fc7dce3e766cb78adfe560aad5b9e095",
".git/objects/06/a3b30329cd4db2ac2ac60d2ed49316a7b06dc8": "287c0d2ededb5e62ab1f89a7f9e6799b",
".git/objects/06/15c7768b9e665e53fd636a9a08b9df200fea4c": "6ef1b4b90ed44fd3eeb3ec9606da4da8",
".git/objects/52/662bd0feaa2ccf9cbb1fdb5e02c1ea4968c481": "ea8befeab66d703ee7721c77d147ec84",
".git/objects/52/ed08811d2497b370b8ed1830e1df009d43ccc2": "6d05da781a53bd14a6cc82c6aba8de93",
".git/objects/97/b1a8b3de8a984bc1dccd86ac87fa5b53a703a8": "fd62e762677d9b0c8261abae1c3b0c86",
".git/objects/63/40648cf53330b4c0b9420d521ca37b766fec3a": "aee833e036eb03893be3bdf66793faec",
".git/objects/63/6830d18e97eeb5881db18413bbd9c7c42a49b1": "52f4ea80ab7f6d6d3ca6a1c836948320",
".git/objects/63/8a717ca195d821b23c810183f0d3aeb14e1bc7": "2f723ab2b5caa7378f6c2e9bc3808143",
".git/objects/0a/c0ef4998ff3baff350bbe8eb6111351627817c": "9c425c56c30c0d3014864c0c54782014",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/b1/91b8911ea54a6de889dcc0871ad371ea3a9eeb": "68bf806eea9ee304a0e96940fe41a778",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/fc8f07d0ae4da4df650b9dce4b074c44071c7b": "ebb4df97e89e4436cd04200f7c6751ff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0f7c58efed023e02bdafb1de7841b20b53c70c": "d1d74c26ec1fba827647bda417fb80a0",
".git/objects/c4/5eae4e3d03cb16f3b00f50c3e10c037ab65d70": "0d2c08828f7ddb64712f300f93b87beb",
".git/objects/e1/afc01c11ed797da282b0e898667404709d20df": "b93c041b72cc26815606ad992fc4f71e",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/fa/271595726921466f1f8e27ee6ec67a87bedc33": "39736ad10bf590f154375a6a8117d257",
".git/objects/e9/bd20466b2bfedfe0dd756981705db9e537603c": "06e63611dbae03adf2f8f0d303992efb",
".git/objects/f1/2d336149d596a93149899819062aabe1e4593c": "a98c911c79fe75d3a91155b3abba05b6",
".git/objects/e7/31ead25b535a16a542f072a3624512d3c78820": "aa23af3f633b5596cda97d8aa99de4b6",
".git/objects/cb/0691909a083837489f510aa0ebfe0107eb7652": "26a59f2c6cad6a5df0e63276aa38c180",
".git/objects/2c/e5dce1199f4c3e2b1609617177d5bdbe8b7884": "ab04b2ee096f5a3f2c619db209a4396b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c1c7b34c76b84002d8f814a7f99ed5a3f24209": "3eed52fb3f264b802668af091be1e401",
".git/objects/1b/5be2094c55a280bc78b0dc55a490f24717427a": "cead7cb564928227556f1017a8fcd1c6",
".git/objects/70/76344e5be193e71c447fd73c5b760420219d5b": "1a75185ba09285d12e891a490472e9a1",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/24/05c81a8d41489e90cb8daf75d7be8f7291b569": "ca361744c2cd9c8d68cddbf5d1f6a3f2",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2e/89b34a00d68743e2bff4169788a9f51d44adb4": "91d97e59328992aeb13101156d710d04",
".git/objects/47/db90fd4448953a7c2ec9971bba351fece43bad": "fdb95963b4672ee16747e9c2c989e720",
".git/objects/47/82daf485951a8d142fd68dcba451d7d17da206": "f8a5570a63e9eb4bf71f690a5f088730",
".git/objects/8b/725d94a0a5997be30c0b3ef6d2adbcfe49741c": "f037f326890c00cd6094c593285ead47",
".git/objects/8b/f9509c2508e20c21fa561dec515abbc9c0c056": "5be75f278b8f745ef5108747abcb2114",
".git/objects/13/f803bd75973f5b1a4c7b8cf2fcfffcf60d8c01": "7aadd3a2e5463620a4f1c6f97fdab9e8",
".git/objects/13/ead883283db709e6f03f6d323e2920802e4fe4": "3de2af4965cd86a0e172dd31b6868633",
".git/objects/7a/4767ba7b502dc48fd41b7a853274e4b8e4222b": "59087f6fbf2f2ef64200b305b415cd4f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/25/d5dae26a255d5803ff837cd4000e63a070b65c": "d0b438dae6e8764d34d7a3b8004400ec",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "8846f4ed07fd65bca6778eb7a919b465",
".git/logs/refs/heads/master": "8846f4ed07fd65bca6778eb7a919b465",
".git/logs/refs/remotes/origin/master": "debc07d0a57c981f1b013c12911ad7c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2f9431d1bbcbb7751865e8519f35e4a7",
".git/refs/remotes/origin/master": "2f9431d1bbcbb7751865e8519f35e4a7",
".git/index": "d035f45ff8c6431cc051910260fb65de",
".git/COMMIT_EDITMSG": "52a893ad1ed1c637ef8652ee0adad75e",
".git/FETCH_HEAD": "6832cdc5e87f14c25e695b8a99fc7466",
"assets/AssetManifest.json": "9db75201ae066aceb28e918283eacb58",
"assets/NOTICES": "6040ce3411b9e18e512d7788e195dd64",
"assets/FontManifest.json": "ca282ae9043d9e0e9443ff21868f175d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/padauk_bold.ttf": "9e5ff67d8e045578958de9adef2c313d",
"assets/assets/images/thermometer.png": "b4ef8e05dc914a962b6df20afc7c03f6",
"assets/assets/images/heart_rate.png": "4b81a576a4f5420ad08924bb2c335ddf",
"assets/assets/images/pressure_meter.png": "d185c67f13d8a5aedbefddf67a866a5f",
"assets/assets/images/healthcare.png": "50f1c2b2cbda0520628d55203fbb429d",
"assets/assets/images/oximeter.png": "2f0912b32e36f28aa87dac0b84f6d3fd",
"assets/assets/images/point.png": "5c7e34781cb3b89c2a0bdc10da7b35ea",
"assets/assets/images/how_to.JPG": "b15034386dd080f75e10db5abd584e60",
"assets/assets/images/lung.png": "70d68bb467706cb4c1c6ee9cc81a50ad",
"assets/assets/images/oxygen-tank.png": "648c534d48867aed28edab8ecdecf4ef",
"assets/assets/images/phone-call.png": "bc2a55639cfefcedbc9c704ece799ed5",
"assets/assets/images/writing.png": "b50cf0cc83392e1cb922ba40591527f5",
"assets/assets/padauk_regular.ttf": "cf35fe732ea1be5d7a2631ed1754708e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
