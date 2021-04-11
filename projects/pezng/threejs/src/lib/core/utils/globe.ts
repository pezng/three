// https://github.com/shuqi7/Interactive_3D_Earth/blob/master/js/main.js
import { Color, Group, ImageUtils, Mesh, MeshPhongMaterial, SphereGeometry, Texture, TextureLoader, BackSide, MeshBasicMaterial, MeshPhongMaterialParameters, MeshBasicMaterialParameters, Object3D, Vector3, PlaneGeometry } from 'three';

const props = {

    globeRadius: 200, // Radius of the globe (used for many calculations)
    colours: {
        // Cache the colours
        globeDots: 'rgb(61, 137, 164)', // No need to use the Three constructor as this value is used for the HTML canvas drawing 'fillStyle' property
        lines: new Color('#eeff5d'),
        lineDots: new Color('#18FFFF')
    },
    alphas: {
        // Transparent values of materials
        globe: 0.4,
        lines: 0.5
    }
};

/* GLOBE */
function addGlobe() {
    var textureLoader = new TextureLoader();
    textureLoader.setCrossOrigin('');
    var radius = props.globeRadius - (props.globeRadius * 0.02);
    var segments = 64;
    var rings = 64;

    // Make gradient
    var canvasSize = 128;
    var textureCanvas = document.createElement('canvas');
    textureCanvas.width = canvasSize;
    textureCanvas.height = canvasSize;
    var canvasContext = textureCanvas.getContext('2d');
    if(!canvasContext) {
        throw new Error('Canvas could not be created');
    }
    canvasContext.rect(0, 0, canvasSize, canvasSize);
    var canvasGradient = canvasContext.createLinearGradient(0, 0, 0, canvasSize);
    canvasGradient.addColorStop(0, '#5B0BA0');
    canvasGradient.addColorStop(0.5, '#260F76');
    canvasGradient.addColorStop(1, '#130D56');
    canvasContext.fillStyle = canvasGradient;
    canvasContext.fill();

    // Make texture
    var texture = new Texture(textureCanvas);
    texture.needsUpdate = true;
    const globe = new Group();
    globe.name = 'Globe';

    const loader = new TextureLoader();
    loader.load('assets/img/no_clouds.jpg', function (texture) {

        // Create the sphere
        const sphere = new SphereGeometry(radius, segments, rings);
        // sphere.rotateY(THREE.Math.degToRad(-180));
        const bump = new TextureLoader().load('assets/img/bump.jpg');
        const spec = new TextureLoader().load('assets/img/specular.png');

        // Map the texture to the material.
        const material = new MeshPhongMaterial({
            map: texture,
            bumpMap: bump,
            bumpScale: 1.5,
            specularMap: spec,
            specular: new Color('grey'),
            shininess: 5,
        });

        // Create a new mesh with sphere geometry.
        const mesh = new Mesh(sphere, material);
        globe.add(mesh);
    });

    // add clouds to the Earth
    const clouds = new TextureLoader().load('assets/img/clouds.png');
    const cloudMesh = new Mesh(new SphereGeometry(radius + 1.5, segments, rings), new MeshPhongMaterial({
        map: clouds,
        transparent: true
    }));
    globe.add(cloudMesh);

    globe.add(globe);
    // groups.main.add(groups.globe);
    // addGlobeDots();
    return globe;
}



//#region createGlobe
export const GlobePlanePhongMaterialsParams: MeshPhongMaterialParameters = {
    map: new TextureLoader().load('assets/images/2_no_clouds_4k.jpg'),
    bumpMap: new TextureLoader().load('assets/images/elev_bump_4k.jpg'),
    bumpScale: 0.005,
    specularMap: new TextureLoader().load('assets/images/water_4k.png'),
    specular: new Color('grey')
}

export const createGlobePlane = (width: number, height: number, widthSegments: number, heightSegments: number) => {
    return new PlaneGeometry(width, height, widthSegments, heightSegments);
}

export const createGlobePlaneMeshPhongMaterial = () => {
    return new MeshPhongMaterial(GlobeMeshPhongMaterialsParams);
}

export const createPlane = (radius: number, segments: number) => {
    return new Mesh(
        createGlobeSphere(radius, segments),
        createGlobeMeshPhongMaterial()
    )
}
//#endregion

//#region createGlobe
export const GlobeMeshPhongMaterialsParams: MeshPhongMaterialParameters = {
    map: new TextureLoader().load('assets/images/2_no_clouds_4k.jpg'),
    bumpMap: new TextureLoader().load('assets/images/elev_bump_4k.jpg'),
    bumpScale: 0.005,
    specularMap: new TextureLoader().load('assets/images/water_4k.png'),
    specular: new Color('grey')
}

export const createGlobeSphere = (radius: number, segments: number) => {
    return new SphereGeometry(radius, segments, segments);
}

export const createGlobeMeshPhongMaterial = () => {
    return new MeshPhongMaterial(GlobeMeshPhongMaterialsParams);
}

export const createSphere = (radius: number, segments: number) => {
    return new Mesh(
        createGlobeSphere(radius, segments),
        createGlobeMeshPhongMaterial()
    )
}
//#endregion

//#region createClouds
export const CloudsMeshPhongMaterialsParams: MeshPhongMaterialParameters = {
    map: new TextureLoader().load('assets/images/fair_clouds_4k.png'),
    transparent: true
}
export const createCloudMeshPhongMaterial = () => {
    return new MeshPhongMaterial(CloudsMeshPhongMaterialsParams);
}


export const createClouds = (radius: number, segments: number) => {
    return new Mesh(
        createGlobeSphere((radius + 0.003), segments),
        createCloudMeshPhongMaterial()
    );
}
//#endregion

//#region createStars
export const StarsMeshBasicMaterialParams: MeshBasicMaterialParameters = {
    map: new TextureLoader().load('assets/images/galaxy_starfield.png'),
    side: BackSide
};

export const createStars = (radius: number, segments: number) => {
    return new Mesh(
        new SphereGeometry(radius, segments, segments),
        new MeshBasicMaterial(StarsMeshBasicMaterialParams)
    );
}
//#endregion

//#region createSatellite

export const SatelliteMeshBasicMaterialParams: MeshBasicMaterialParameters = {
    color: new Color('red'),
};
//#endregion

//#region Animations
export const rotateAboutPoint = (obj: Object3D, point: Vector3, axis: Vector3, theta: number, pointIsWorld = false) => {
    if(pointIsWorld && obj && obj.parent){
        obj.parent.localToWorld(obj.position); // compensate for world coordinate
    }

    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset

    if(pointIsWorld && obj && obj.parent){
        obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta); 
}