//
//  ViewController.m
//  Smartgarden
//
//  Created by Jörg Vanderhoeven on 05.07.21.
//

#import "ViewController.h"
#import <Cordova/CDVViewController.h>
#import <WebKit/WebKit.h>

@interface ViewController ()

@end

@implementation ViewController

@synthesize topNavigtion;

- (void)viewDidLoad {
    [super viewDidLoad];
    CDVViewController* viewController = [CDVViewController new];
    //viewController.view.frame = CGRectMake(0, 0, 320, 480);
    
    // set CDVViewController as childController to be able to access
    // ViewController over parentViewControler from CordovaPlugin
    [self addChildViewController:viewController];
    
    [_theView addSubview:viewController.view];
}


@end
