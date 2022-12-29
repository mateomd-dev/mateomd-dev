--- 
id: 1 
title: How I Built a Real Self-Driving Car from Scratch 
author: mateo 
created_at: 2022-07-11 
status: draft
summary: In the summer of 2021, I developed an autopilot software from scratch and implemented it in a real car. After publishing a demo and receiving many questions about the project, I decided to share the story behind the development process. 
---

After my second year of university in the summer of 2022, I decided to work on one of the most advanced
projects up to that time - developing an autopilot software from scratch and implementing it in a
real car. After making some of the main parts of my [code](https://github.com/mateomd-dev/maeve-autopilot) public and publishing a [demo video](https://youtu.be/h1Wg7Cn1D-E), I
received many questions about the project. Therefore, I decided to share the story behind the
development process.

I have always been fascinated by anything related to AI and Machine
Learning. The idea of computers being able to learn and a complete paradigm shift in
software development, was incredibly inspiring to me. However, I could not wrap my head around it
*at all*. Around February 2021, I started with arguably the most popular Coursera courses on the
related topics — [Machine
Learning](https://www.coursera.org/learn/machine-learning?utm_source=gg&utm_medium=sem&utm_campaign=07-StanfordML-ROW&utm_content=07-StanfordML-ROW&campaignid=2070742271&adgroupid=80109820241&device=c&keyword=machine%20learning%20mooc&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=516962315003&hide_mobile_promo&gclid=CjwKCAiAksyNBhAPEiwAlDBeLHvf3K9Jfjs77yy7pFjfqGtLrzN0UMYYtcw3WhhsBxfEMC1IsaQuahoCqmEQAvD_BwE),
the [Deep Learning
Specialization](https://www.coursera.org/specializations/deep-learning?utm_source=gg&utm_medium=sem&utm_campaign=17-DeepLearning-ROW&utm_content=17-DeepLearning-ROW&campaignid=6465471773&adgroupid=77656689495&device=c&keyword=coursera%20deep%20learning%20specialization&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=506750650449&hide_mobile_promo&gclid=CjwKCAiAksyNBhAPEiwAlDBeLPUYNmgNJuRtZNZUMIzj0njAzstXWVMLouSp1283hz5N_FCnUUr4kRoCGmUQAvD_BwE)
and a part of the [TensorFlow Professional
Certificate](https://www.coursera.org/professional-certificates/tensorflow-in-practice). <br>
I'm a huge proponent of hands-on learning, so I wanted to pick a project in a domain of interest I
could apply my knowledge. As a big fan of Tesla, I was drawn into the world of Autonomous Vehicles
and Computer Vision right from the start - however, I wanted to go beyond just implementing a neural
network in e.g., a GTA car, so I took this idea to the next level.

# Development Process
After preliminary research, I "settled" for an autonomous steering
mechanism due to time and budget constraints. It became apparent very quickly that even steering
alone is a very challenging task. I started with the arguably more traditional approach of explicit decomposition of the problem by looking
into various algorithms for tasks such as lane detection and path planning. However, as this project was meant to
deepen my still-somewhat-shallow knowledge of Deep Learning, I was inclining more towards end-to-end
approaches using neural networks. Soon, I came across an [NVIDIA paper](https://images.nvidia.com/content/tegra/automotive/images/2016/solutions/pdf/end-to-end-dl-using-px.pdf) from 2016, which discusses an implementation of a CNN that maps raw pixels from the video input to the steering
commands with surprisingly good results. There are also quite a few implementations available, which inspired me to create my own. <br>
The high-level overview of the system is quite straightforward:
- Mount a camera system to the front of the car
- Get the steering angle value at any given time
- Pair these two up and pass them through the neural network
- Build a system to execute a steering command on the steering wheel
- Adapt the system to a real-time execution, i.e., take an image of the road ahead, predict the
  steering angle and execute it on the steering unit

## Choosing the Car 
Given the highly experimental and potentially destructive
nature of this project, I bought the cheapest car I could find - concretely, the first model of
Skoda Fabia. At this stage, I did not have a detailed plan for the implementation, so my only
requirement for the car was power steering, which made it possible to build the steering mechanism
without extensive and costly adjustments to the steering column. 

Naturally, the first and most important thing I did was to print a Tesla logo and slap it on the
front of the car. One time, I almost drove away with the wrong car...

![test alt](/img/maeve-two-cars.png){.w-100 .mt-3 .mb-5}

## Collecting Data on a Budget
To stick to the "end-to-end" aspect of this project, I wanted to
produce my own dataset. After experimenting with a bunch of web cameras, I mounted an old iPhone 6S
behind the front window and used that instead for the video input. <br>
Measuring the steering angle was a bigger challenge. Modern cars typically have either the CAN bus
that can be tapped into to get the precise steering angle at any given time, or a separate
steering angle sensor built directly inside the steering wheel. My car had neither, so I had to
build my own sensor from scratch.

The main idea behind my design was to use the dynamically changing resistance caused by the steering
and map it to the steering angle value. The first issue I faced was that the steering wheel
turns more than 360 degrees, so I needed to account for these "extra turns." My initial solution was
to use a coil around the steering column, and a brush mounted to the column that would be sliding
across the coil, changing the resistance of the wire. <br>
Simpler (and, for most people, more obvious...) solution I ended up with was based on gears and a
potentiometer: I calculated the gear ratios to map the steering angle values to the 360° range of a
potentiometer mounted underneath the steering column, printed the gears, and *voilà*:

![Steering Angle Sensor](/img/maeve-gears.png){.w-100 .mt-3 .mb-5}

The potentiometer is wired up to an Arduino board, which then goes to the laptop running the code
for reading and matching the steering angle with the video input from the iPhone. While the script
itself wasn't too complex, the difficult aspect of this setup was synchronizing the serial
communication between the Arduino and the laptop due to the somewhat strict latency requirements of
the driving task. <br>
After that, long hours of driving around my town with Lex Fridman's podcasts in the background became
my go-to leisure activity.

### Data Pre-Processing 
I experimented with several techniques during the training process of
different models, but only some produced significant results. The images from the video
input are resized to 100x100 and cropped to remove unnecessary features that confused the network,
especially during bad lighting conditions (mainly the sky getting overexposed). All images are
converted to a single-channel colour. Apart from these methods, I tried applying low values of
Gaussian blur and other filters - this made a small difference in some situations, but I was
not able to fully analyse the correlation.

## The Neural Network Architecture 
With a decent dataset, it was time to design
and train the neural network. As I have mentioned, the initial architecture was based on the NVIDIA
paper, however, I have experimented with many models and adjustments, especially in the demo, where
the overall system was very different.

The main architecture described in the paper, which is also part of the public repository, is the
following:
- A Normalization Layer
- Six Convolution Layers (with ReLU activations), each followed by a Max-Pooling Layer
- A Flatten Layer
- Four Fully-Connected Layers, followed by one neuron in the last layer for the angle prediction

![Neural Network Architecture Diagram](/img/maeve-neural-net.png){.w-100 .mt-3 .mb-5}

The network minimizes the MSE between the output of the network and the actual
steering angle. I wrote the model in TensorFlow, and for most parts, I was using my old laptop to
train it (yes, it took ages to iterate). I used the Adam optimizer and Dropout during the training to obtain better results on
other datasets. This model was sufficient for a slow drive on the testing dataset, failing only on complex or
non-repeating scenarios. As expected, the network's activations mainly highlight
lanes and curbs.

![Neural Network Activations](/img/maeve-activations.jpg){.w-100 .mt-3 .mb-5}

## The Steering Mechanism 
After I finalised the model by testing it on the data collected in the
previous step, the next (and probably the most challenging) step was to design and implement the
execution unit that would take care of actually controlling the car.

Building on my previous success with gears and Arduino, my initial idea was to turn the wheel
using a single DC/Stepper motor connected to the board via an H-Bridge IC. I dismantled the rear
wiper to get the DC motor, but it wasn't strong enough to turn the steering wheel reliably, even
with a high gear ratio.

![Two steering unit prototypes](/img/maeve-motors.jpg){.w-100 .mt-3 .mb-5}

After testing a few other motors I had lying around, which gave me a better idea of what I neede, I
bought a way more powerful one (32Amp, 380W), mounted it to my setup, connected it to the board, and... fried
the 600mAmp H-Bridge straight away :) <br>
Well, I'm mainly a software guy, so I apologize to all
of you who are more experienced with electronics. Using an H-Bridge turned out to be an issue, since
one that would be strong enough for the circuit would be very expensive; the same goes for the cooling
mechanism that would have to be used to keep a smaller H-Bridge alive.

Thus, just like earlier with the steering angle sensor, I overcame this obstacle by constructing my
own "H-Bridge" using two relays, therefore physically separating the controller Arduino circuit and
the power-hungry DC motor connected to the car battery. After that, I spent another few hours fixing
bugs, testing the setup on the dataset again, and driving in an empty parking lot.

![Circuit diagram using relays](/img/maeve-relays-diagram.png){.w-100 .mt-3 .mb-5}

## Final Tests and Results 
The first real tests failed horribly. The car started drifting away a few
minutes into the driving, or it would make a strange, spontaneous decision, usually to make up for an
accumulating error somewhere in the system. My favourite one was a test during bad weather
conditions, when  the car decided it wanted to go for a quick swim in the lake nearby. <br>
*A lot* of hours and sleepless nights went into fixing bugs, implementing mechanisms to keep track
of the errors and potentially overriding the autonomous system, further analysis of the model, and
more. After all that, I finally ended up with a system that produced impressive results and could generalise well in most of the scenarios, where the decisions do not rely on other aspects, such
as recognition, detection, or navigation. Despite the somewhat simple design of the whole pipeline,
everything that could go wrong did go wrong. There were so many challenges along the way, such as
keeping the motor stable, dealing with the precision of the steering angle to avoid the wheel
endlessly oscillating between two values, tuning the sequence frequency, ..., that it is hard to
believe this whole thing actually worked in the end. But it did.

![](https://media.giphy.com/media/HUBSzphkTC2HXJf80k/giphy.gif){.w-50 .mt-3 .mb-5 .pe-2}
![](https://media.giphy.com/media/xEgdH1FvRfpLub40tv/giphy-downsized-large.gif){.w-50 .mt-3 .mb-5 .ps-2}

# Conclusion
This article described my experience of working on an advanced project as a beginner in both the software, and the hardware part.
The process of building an end-to-end pipeline for data collection, processing, implementing a
neural network for autonomous steering, and making all the major hardware components from scratch
was definitely the most ambitious and valuable project I've ever built in terms of learning and
solidifying my knowledge. Looking back at the decisions made along the way, there's a lot of things I would
do differently today - but after all, that's what learning and progressing is all about. This project opened the world of self-driving cars, Deep Learning, and Computer Vision to me, and I hope to continue in that direction in the future.












