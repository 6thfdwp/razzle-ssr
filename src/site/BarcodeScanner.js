import React, { useState, useEffect } from 'react';
// import Quagga from 'quagga';

const quaggaOps = {
  inputStream: {
    type: 'LiveStream',
    constraints: {
      width: { min: 640 },
      height: { min: 480 },
      aspectRatio: { min: 1, max: 100 },
      facingMode: 'environment' // or user
    }
  },
  locator: {
    patchSize: 'medium',
    halfSample: true
  },
  numOfWorkers: 2,
  frequency: 10,
  decoder: {
    readers: [
      {
        format: 'code_128_reader',
        config: {}
      }
    ]
  },
  locate: true
};
const QuaggaReader = {
  init: () => {
    Quagga.init(quaggaOps, function(err) {
      if (err) {
        console.log(err);
        return;
      }
      // App.checkCapabilities();
      Quagga.start();
    });
  },
  initCameraSelection: function() {
    var streamLabel = Quagga.CameraAccess.getActiveStreamLabel();

    return Quagga.CameraAccess.enumerateVideoDevices().then(function(devices) {
      function pruneText(text) {
        return text.length > 30 ? text.substr(0, 30) : text;
      }
      console.log(devices);
      // var $deviceSelection = document.getElementById('deviceSelection');
      // while ($deviceSelection.firstChild) {
      //   $deviceSelection.removeChild($deviceSelection.firstChild);
      // }
    });
  },

  attachProcessEvent: () => {
    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          const width = parseInt(drawingCanvas.getAttribute('width'));
          const height = parseInt(drawingCanvas.getAttribute('height'));
          drawingCtx.clearRect(0, 0, width, height);
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#00F',
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, {
            color: 'red',
            lineWidth: 3
          });
        }
      }
    });
    Quagga.onDetected(function(result) {
      var code = result.codeResult.code;
    });
  }
};

// function startQuagga() {}

export default function BarcodeScanner() {
  const [overlayShown, toggleOverlay] = useState(false);
  // shown:  useEffect1(start Quagga)
  // hide:   cleanup stop Quagga for effect1
  // hide    useEffect2(stop Quagga)

  // shown:  cleanup stop Quagga for effect2
  // shown:  useEffect3(start Quagga)

  useEffect(() => {
    if (overlayShown) {
      // Quagga.init(conf, err => {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   }
      //   Quagga.start();
      // });
      console.log('start Quagga...');
    } else {
      // check if stop can be done when first render
      console.log('stop Quagga..');
    }
    // no need to cleanup
    // return () => {};
  });

  return (
    <div>
      <button className="barcode-scanner" onClick={() => toggleOverlay(true)}>
        <i className="fa fa-barcode fa-5x" />
      </button>
      <ScannerOverlay shown={overlayShown} toggle={toggleOverlay} />
    </div>
  );
}

function ScannerOverlay(props) {
  const style = props.shown ? 'video-overlay video-overlay-shown' : 'video-overlay';
  return (
    <div className={style}>
      <span className="closebtn" onClick={() => props.toggle(false)}>
        {' '}
        &times;
      </span>
    </div>
  );
}
